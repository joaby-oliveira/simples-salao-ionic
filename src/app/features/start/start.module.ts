import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './containers/start/start.component';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';

const routes: Routes = [{ path: '', component: StartComponent }];

@NgModule({
  declarations: [StartComponent],
  imports: [CommonModule, RouterModule.forChild(routes), IonicModule],
})
export class StartModule {}
