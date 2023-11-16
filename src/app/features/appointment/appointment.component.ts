import { Component, LOCALE_ID } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CalendarView } from 'angular-calendar';
import { AppointmentFormService } from './services/appointment-form.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css'],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }],
})
export class AppointmentComponent {
  constructor(
    private formBuilder: FormBuilder,
    private appointmentFormService: AppointmentFormService
  ) {}

  view = CalendarView.Day;
  viewDate = new Date();
  locale = 'pt-BR';

  filterForm = this.formBuilder.group({
    professional: ['uuid1'],
  });

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

  appointments = [
    {
      serviceName: 'Corte de cabelo',
      price: 50,
      date: new Date(2022, 1, 20, 10, 30),
    },
    {
      serviceName: 'Barba',
      price: 30,
      date: new Date(2022, 1, 21, 14, 0),
    },
  ];

  openRegistrationForm() {
    this.appointmentFormService.isOpen.next(true);

    const professional = this.filterForm.controls.professional.value;
    if (professional) {
      this.appointmentFormService.professional.next(professional);
    }
  }
}
