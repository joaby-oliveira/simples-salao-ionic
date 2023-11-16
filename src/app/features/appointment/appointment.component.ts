import { Component, LOCALE_ID } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CalendarEvent, CalendarView } from 'angular-calendar';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css'],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }],
})
export class AppointmentComponent {
  constructor(private formBuilder: FormBuilder) {}

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

  openRegistrationForm () {
    console.log('abrir o modal')
  }
}
