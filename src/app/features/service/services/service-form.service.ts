import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ServiceFormService {
  isOpen: BehaviorSubject<boolean> = new BehaviorSubject(false);
}
