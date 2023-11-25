import { Component } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { ProfessionalFormService } from '../../services/professional-form.service';
import { ProfessionalApi } from '../../api/professional.api';
import { map } from 'rxjs';
import { ToastController } from '@ionic/angular';
import { ProfessionalService } from '../../services/professional.service';

@Component({
  selector: 'app-professional-form',
  templateUrl: './professional-form.component.html',
})
export class ProfessionalFormComponent {
  constructor(
    private professionalFormService: ProfessionalFormService,
    private formBuilder: FormBuilder,
    private professionalApi: ProfessionalApi,
    private toastController: ToastController,
    private professionalService: ProfessionalService
  ) {}

  $isOpen = this.professionalFormService.isOpen;

  professionalForm = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  cancel() {
    this.professionalFormService.isOpen.next(false);
  }

  confirm() {
    this.professionalApi
      .createProfessional({
        name: this.professionalForm.value.name ?? '',
        email: this.professionalForm.value.email ?? '',
        password: this.professionalForm.value.password ?? '',
      })
      .subscribe({
        next: () => {
          this.professionalFormService.isOpen.next(false);
          this.professionalForm.reset();
          this.professionalService.professionals$ = this.professionalApi
            .getProfessionals()
            .pipe(map((response) => response.result));
        },
        error: async (error: any) => {
          const toast = await this.toastController.create({
            message: 'Não foi possível criar o profissional' + error.error.message,
            duration: 2000,
            position: 'top',
            color: 'danger',
          });

          await toast.present();
        },
      });
  }
}
