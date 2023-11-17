import { Component } from '@angular/core';

import { FormBuilder } from '@angular/forms';
import { ClientFormService } from '../../services/client-form.service';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
})
export class ClientFormComponent {
  constructor(
    private clientFormService: ClientFormService,
    private formBuilder: FormBuilder
  ) {}

  $isOpen = this.clientFormService.isOpen;

  clientForm = this.formBuilder.group({
    name: [''],
    price: [''],
    duration: [''],
  });

  cancel() {
    this.clientFormService.isOpen.next(false);
  }

  confirm() {
    this.clientFormService.isOpen.next(false);
    console.log('solicitar serviço');
  }
}
