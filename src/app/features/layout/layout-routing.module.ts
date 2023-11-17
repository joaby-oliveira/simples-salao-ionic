import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutRootComponent } from './containers/layout-root/layout-root.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutRootComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
      {
        path: 'home',
        loadChildren: () =>
          import('../home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'appointments',
        loadChildren: () =>
          import('../appointment/appointment.module').then(
            (m) => m.AppointmentModule
          ),
      },
      {
        path: 'services',
        loadChildren: () =>
          import('../service/service.module').then((m) => m.ServiceModule),
      },
      {
        path: 'clients',
        loadChildren: () =>
          import('../client/client.module').then((m) => m.ClientModule),
      },
      {
        path: 'preferences',
        loadChildren: () =>
          import('../preferences/preferences.module').then(
            (m) => m.PreferencesModule
          ),
      },
    ],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
