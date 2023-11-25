import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PreferencesApi {
  constructor(private httpClient: HttpClient) {}
  getCompanies() {
    return this.httpClient.get<{
      result: { message: string; result: any[] };
      message: string;
    }>('http://localhost:3000/company');
  }
}
