import { Component } from '@angular/core';
import { UserService } from 'src/app/global/services/user.service';

@Component({
  templateUrl: './home-root.component.html',
  styleUrls: ['./home-root.component.css'],
})
export class HomeRootComponent {
  constructor(public userService: UserService) {}

  userType = this.userService.user.userType;
  name = this.userService.user.name;
  professionals = ['Cláudio Junior', 'Emilly Mota', 'Robson Martins'];
  appointments = [
    {
      serviceName: 'Corte de cabelo',
      price: 50,
      date: new Date(2022, 1, 20, 10, 30),
    },
    {
      serviceName: 'Barba',
      price: 30,
      date: new Date(2022, 1, 21, 14, 0),
    },
  ];
  recommendedServices = [
    {
      name: 'Corte de cabelo',
      price: 50,
    },
    {
      name: 'Barba',
      price: 30,
    },
  ];
  pages = [
    { name: 'Serviços', href: '' },
    { name: 'Clientes', href: '' },
  ];
}
