import { Component, Input, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { AppointmentFormService } from '../../services/appointment-form.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.css'],
})
export class AppointmentFormComponent {
  constructor(
    private appointmentFormService: AppointmentFormService,
    private formBuilder: FormBuilder
  ) {
    this.$professional.subscribe((professional) => {
      this.appointmentForm.controls.professional.setValue(professional);
    });
    this.$date.subscribe((date) => {
      console.log(date)
    });
  }

  $isOpen = this.appointmentFormService.isOpen;
  $professional = this.appointmentFormService.professional;
  $time = this.appointmentFormService.time;
  $date = this.appointmentFormService.date;


  professionals = [
    {
      name: 'Robson',
      idProfessional: 'uuid1',
    },
    {
      name: 'Emilly',
      idProfessional: 'uuid2',
    },
  ];

  message =
    'This modal example uses triggers to automatically open a modal when the button is clicked.';

  appointmentForm = this.formBuilder.group({
    professional: [{value: '', disabled: true}],
    startTime: [''],
    endTime: [''],
  });

  cancel() {
    this.appointmentFormService.isOpen.next(false);
  }

  confirm() {
    this.appointmentFormService.isOpen.next(false);
    console.log('solicitar serviço')
  }
}
