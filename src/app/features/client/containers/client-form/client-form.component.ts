import { Component } from '@angular/core';

import { FormBuilder } from '@angular/forms';
import { ClientFormService } from '../../services/client-form.service';
import { ClientApi } from '../../api/client.api';
import { ClientService } from '../../services/client.service';
import { map } from 'rxjs';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
})
export class ClientFormComponent {
  constructor(
    private clientFormService: ClientFormService,
    private formBuilder: FormBuilder,
    private clientApi: ClientApi,
    private clientService: ClientService,
    private toastController: ToastController
  ) {}

  $isOpen = this.clientFormService.isOpen;

  clientForm = this.formBuilder.group({
    name: [''],
    email: [''],
    password: ['']
  });

  cancel() {
    this.clientFormService.isOpen.next(false);
  }

  confirm() {
    this.clientApi
      .createClient({
        name: this.clientForm.value.name ?? '',
        email: this.clientForm.value.email ?? '',
        password: this.clientForm.value.password ?? '',
      })
      .subscribe({
        next: () => {
          this.clientFormService.isOpen.next(false);
          this.clientForm.reset();
          this.clientService.clients$ = this.clientApi
            .getClients()
            .pipe(map((response) => response.result));
        },
        error: async (error: any) => {
          const toast = await this.toastController.create({
            message: 'Não foi possível criar o cliente' + error.error.message,
            duration: 2000,
            position: 'top',
            color: 'danger',
          });

          await toast.present();
        },
      });
  }
}
