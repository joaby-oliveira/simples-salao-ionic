import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppointmentComponent } from './appointment.component';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { CalendarDayModule } from 'angular-calendar';

const routes: Routes = [{ path: '', component: AppointmentComponent }];

@NgModule({
  declarations: [AppointmentComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    IonicModule,
    ReactiveFormsModule,
    CalendarDayModule,
  ],
})
export class AppointmentModule {}
