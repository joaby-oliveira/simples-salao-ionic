import { Component, LOCALE_ID, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { AppointmentFormService } from './services/appointment-form.service';
import { UserService } from 'src/app/global/services/user.service';
import { AppointmentApi } from './api/appointment.api';
import { AppointmentService } from './services/appointment.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css'],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }],
})
export class AppointmentComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private appointmentFormService: AppointmentFormService,
    private userService: UserService,
    private appointmentService: AppointmentService,
    private appointmentApi: AppointmentApi
  ) {}

  ngOnInit(): void {
    this.appointmentApi
      .getAppointments()
      .pipe(map((response) => response.result))
      .subscribe((appointments) =>
        this.appointmentService.appointments$.next(appointments)
      );

    this.appointmentService.appointments$.subscribe((appointments) => {
      this.events = appointments.map<CalendarEvent>((appointment) => ({
        title: appointment.service.name,
        start: new Date(appointment.startTime),
        end: new Date(appointment.endTime),
        color: {
          primary: '#1e90ff',
          secondary: '#D1E8FF',
        },
      }));
    });
  }

  events!: CalendarEvent[];

  userType = this.userService.user.userType;

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

  confirmedAppointments = [
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

  requestedAppointments = [
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
      this.appointmentFormService.date.next(this.viewDate);
    }
  }
}
