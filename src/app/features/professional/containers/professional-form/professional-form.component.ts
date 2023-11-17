import { Component } from '@angular/core';

import { FormBuilder } from '@angular/forms';
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

  professionalForm = this.formBuilder.group({
    name: [''],
  });

  cancel() {
    this.professionalFormService.isOpen.next(false);
  }

  confirm() {
    this.professionalFormService.isOpen.next(false);
    console.log('solicitar serviço');
  }
}
