import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeRootComponent } from './container/home-root/home-root.component';
import { IonicModule } from '@ionic/angular';
import { ProfessionalsListComponent } from './components/professionals-list/professionals-list.component';

const routes: Routes = [{ path: '', component: HomeRootComponent }];

@NgModule({
  declarations: [HomeRootComponent, ProfessionalsListComponent],
  imports: [CommonModule, RouterModule.forChild(routes), IonicModule],
})
export class HomeModule {}
