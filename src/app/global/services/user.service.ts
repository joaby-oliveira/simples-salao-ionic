import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user = {
    name: 'Robson',
    idUser: 'uuid1',
    idClient: 'uuid1',
    idProfessional: undefined,
    userType: 'client',
  };
}
