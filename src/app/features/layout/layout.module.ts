import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutRootComponent } from './containers/layout-root/layout-root.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    LayoutRootComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    IonicModule
  ]
})
export class LayoutModule { }
