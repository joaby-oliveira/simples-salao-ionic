import { NgModule } from '@angular/core';
import { ServiceRootComponent } from './containers/service-root/service-root.component';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ServiceFormComponent } from './containers/service-form/service-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ServiceFormService } from './services/service-form.service';

const routes: Routes = [{ path: '', component: ServiceRootComponent }];

@NgModule({
  declarations: [ServiceRootComponent, ServiceFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    IonicModule,
    ReactiveFormsModule,
  ],
  providers: [ServiceFormService],
})
export class ServiceModule {}
