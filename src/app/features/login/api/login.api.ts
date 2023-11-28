import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoginApi {
  constructor(private httpClient: HttpClient) {}

  login(login: { email: string; password: string }) {
    return this.httpClient.post<{ message: string; result: { token: string } }>(
      'http://localhost:3000/login',
      login
    );
  }
}
