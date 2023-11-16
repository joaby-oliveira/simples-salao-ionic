import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppointmentComponent } from './appointment.component';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import {
  CalendarDayModule,
  CalendarModule,
  DateAdapter,
} from 'angular-calendar';
import { AppointmentFormComponent } from './containers/appointment-form/appointment-form.component';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { AppointmentFormService } from './services/appointment-form.service';

const routes: Routes = [{ path: '', component: AppointmentComponent }];

@NgModule({
  declarations: [AppointmentComponent, AppointmentFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    IonicModule,
    ReactiveFormsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  providers: [AppointmentFormService],
})
export class AppointmentModule {}
