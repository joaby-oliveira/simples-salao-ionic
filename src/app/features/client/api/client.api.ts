import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../interfaces/Client';

@Injectable()
export class ClientApi {
  constructor(private httpClient: HttpClient) {}

  getClients() {
    return this.httpClient.get<{ message: string; result: Client[] }>(
      'http://localhost:3000/client'
    );
  }

  createClient(client: Omit<Client, 'idClient'>) {
    return this.httpClient.post<{ message: string; result: Client }>(
      'http://localhost:3000/client',
      { client }
    );
  }
}
