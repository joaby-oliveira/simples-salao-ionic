import { Injectable } from '@angular/core';
import { Appointment } from '../interfaces/Appointment';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class AppointmentService {
  appointments$: Subject<Appointment[]> = new Subject<Appointment[]>();
}
