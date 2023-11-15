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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
