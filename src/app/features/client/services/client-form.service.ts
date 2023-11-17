import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ClientFormService {
  isOpen: BehaviorSubject<boolean> = new BehaviorSubject(false);
}
