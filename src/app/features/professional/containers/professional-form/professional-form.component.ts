import { Component } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { ProfessionalFormService } from '../../services/professional-form.service';

@Component({
  selector: 'app-professional-form',
  templateUrl: './professional-form.component.html',
})
export class ProfessionalFormComponent {
  constructor(
    private professionalFormService: ProfessionalFormService,
    private formBuilder: FormBuilder
  ) {}

  $isOpen = this.professionalFormService.isOpen;

  formProfissional = this.formBuilder.group({
    nomeProfissional: ['', Validators.required],
    emailProfissional: ['', [Validators.required, Validators.email]],
    celularProfissional: ['', Validators.required],
  });

  cancel() {
    this.professionalFormService.isOpen.next(false);
  }

  confirm() {
    this.professionalFormService.isOpen.next(false);
    console.log('solicitar serviço');
  }
}
