import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class AppointmentFormService {
  isOpen: BehaviorSubject<boolean> = new BehaviorSubject(true);
  professional: Subject<string> = new Subject();
  time: Subject<{
    start: string;
    end: string;
  }> = new Subject();
}
