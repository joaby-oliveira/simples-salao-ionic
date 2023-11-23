import { Component } from '@angular/core';

import { FormBuilder } from '@angular/forms';
import { ServiceFormService } from '../../services/service-form.service';
import { ServiceApi } from '../../api/service.api';
import { ToastController } from '@ionic/angular';
import { ServiceService } from '../../services/service.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-service-form',
  templateUrl: './service-form.component.html',
})
export class ServiceFormComponent {
  constructor(
    private serviceFormService: ServiceFormService,
    private formBuilder: FormBuilder,
    private serviceApi: ServiceApi,
    private toastController: ToastController,
    private serviceService: ServiceService
  ) {}

  $isOpen = this.serviceFormService.isOpen;

  serviceForm = this.formBuilder.group({
    name: [''],
    price: [0],
    description: [''],
    duration: [0],
  });

  cancel() {
    this.serviceFormService.isOpen.next(false);
  }

  confirm() {
    this.serviceApi
      .createService({
        name: this.serviceForm.value.name ?? '',
        price: this.serviceForm.value.price ?? 0,
        description: this.serviceForm.value.description ?? '',
        duration: this.serviceForm.value.duration ?? 0,
        idCompany: localStorage.getItem('idCompany') ?? '',
      })
      .subscribe({
        next: () => {
          this.serviceFormService.isOpen.next(false);
          this.serviceForm.reset();
          this.serviceService.services$ = this.serviceApi
            .getServices()
            .pipe(map((response) => response.result));
        },
        error: async (error: any) => {
          const toast = await this.toastController.create({
            message: 'Não foi possível criar o serviço' + error.error.message,
            duration: 2000,
            position: 'top',
            color: 'danger',
          });

          await toast.present();
        },
      });
  }
}
