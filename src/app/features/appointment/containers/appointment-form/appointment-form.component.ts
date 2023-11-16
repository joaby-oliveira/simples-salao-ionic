import { Component, Input, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { AppointmentFormService } from '../../services/appointment-form.service';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.css'],
})
export class AppointmentFormComponent {
  constructor(private appointmentFormService: AppointmentFormService) {}

  $isOpen = this.appointmentFormService.isOpen;

  message =
    'This modal example uses triggers to automatically open a modal when the button is clicked.';

  cancel() {
    this.appointmentFormService.isOpen.next(false);
  }

  confirm() {
    this.appointmentFormService.isOpen.next(false);
  }
}
