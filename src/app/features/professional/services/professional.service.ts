import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Professional } from '../interfaces/Professional';

@Injectable()
export class ProfessionalService {
  professionals$: Observable<Professional[]> = new Observable();
}
