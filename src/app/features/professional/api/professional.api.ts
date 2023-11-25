import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProfessionalApi {
  constructor(private httpClient: HttpClient) {}

  getProfessionals() {
    return this.httpClient.get<{ message: string; result: any }>(
      'http://localhost:3000/professional'
    );
  }
}
