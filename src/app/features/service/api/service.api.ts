import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ServiceApi {
  constructor(private httpClient: HttpClient) {}

  getServices() {
    return this.httpClient.get<{ message: string; result: any[] }>(
      'http://localhost:3000/service'
    );
  }
}
