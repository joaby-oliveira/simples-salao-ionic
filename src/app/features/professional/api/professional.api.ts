import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Professional } from '../interfaces/Professional';

@Injectable()
export class ProfessionalApi {
  constructor(private httpClient: HttpClient) {}

  getProfessionals() {
    return this.httpClient.get<{ message: string; result: any }>(
      'http://localhost:3000/professional'
    );
  }

  createProfessional(professional: Omit<Professional, 'idProfessional'>) {
    return this.httpClient.post<{ message: string; result: any }>(
      'http://localhost:3000/professional',
      professional
    );
  }

  deleteProfessional(idProfessional: string) {
    return this.httpClient.delete<{ message: string }>(
      `http://localhost:3000/professional/${idProfessional}`
    );
  }
}
