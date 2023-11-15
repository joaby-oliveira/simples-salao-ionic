import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeRootComponent } from './container/home-root/home-root.component';

const routes: Routes = [{ path: '', component: HomeRootComponent }];

@NgModule({
  declarations: [HomeRootComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class HomeModule {}
