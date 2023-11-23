import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Service } from '../interfaces/Service';

@Injectable()
export class ServiceService {
  services$: Observable<Service[]> = new Observable();
  services!: Service[];
}
