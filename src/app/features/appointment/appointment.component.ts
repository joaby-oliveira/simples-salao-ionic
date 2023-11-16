import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css'],
})
export class AppointmentComponent {
  constructor(private formBuilder: FormBuilder) {}

  viewDate = new Date();
  locale = 'pt';

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
}
