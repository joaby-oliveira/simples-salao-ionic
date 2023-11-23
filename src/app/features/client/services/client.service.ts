import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../interfaces/Client';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  clients$: Observable<Client[]> = new Observable<Client[]>();
}
