import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Service } from '../interfaces/Service';

@Injectable()
export class ServiceApi {
  constructor(private httpClient: HttpClient) {}

  getServices() {
    return this.httpClient.get<{ message: string; result: Service[] }>(
      'http://localhost:3000/service'
    );
  }

  createService(service: Omit<Service, 'idService'>) {
    return this.httpClient.post<{ message: string }>(
      'http://localhost:3000/service',
      service
    );
  }

  deleteService(idService: string) {
    return this.httpClient.delete<{ message: string }>(
      `http://localhost:3000/service/${idService}`
    );
  }
}
