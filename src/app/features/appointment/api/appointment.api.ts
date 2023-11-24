import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appointment } from '../interfaces/Appointment';

@Injectable()
export class AppointmentApi {
  constructor(private httpClient: HttpClient) {}

  getAppointments() {
    return this.httpClient.get<{ message: string; result: Appointment[] }>(
      'http://localhost:3000/appointment'
    );
  }
}
