import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AppointmentFormService {
  isOpen: BehaviorSubject<boolean> = new BehaviorSubject(false);
}
