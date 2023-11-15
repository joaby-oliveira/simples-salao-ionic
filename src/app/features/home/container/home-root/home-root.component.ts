import { Component } from '@angular/core';

@Component({
  templateUrl: './home-root.component.html',
  styleUrls: ['./home-root.component.css'],
})
export class HomeRootComponent {
  userType = 'client'
  userName = 'John Doe';
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
}
