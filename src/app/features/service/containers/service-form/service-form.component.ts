import { Component } from '@angular/core';

import { FormBuilder } from '@angular/forms';
import { ServiceFormService } from '../../services/service-form.service';

@Component({
  selector: 'app-service-form',
  templateUrl: './service-form.component.html',
})
export class ServiceFormComponent {
  constructor(
    private serviceFormService: ServiceFormService,
    private formBuilder: FormBuilder
  ) {}

  $isOpen = this.serviceFormService.isOpen;

  serviceForm = this.formBuilder.group({
    name: [''],
    price: [''],
    duration: [''],
  });

  cancel() {
    this.serviceFormService.isOpen.next(false);
  }

  confirm() {
    this.serviceFormService.isOpen.next(false);
    console.log('solicitar serviço');
  }
}
