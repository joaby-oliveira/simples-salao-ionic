import { NgModule } from '@angular/core';
import { ServiceRootComponent } from './containers/service-root/service-root.component';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';

const routes: Routes = [{ path: '', component: ServiceRootComponent }];

@NgModule({
  declarations: [ServiceRootComponent],
  imports: [CommonModule, RouterModule.forChild(routes), IonicModule],
})
export class ServiceModule {}
