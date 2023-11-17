import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PreferencesRootComponent } from './containers/preferences-root.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [{ path: '', component: PreferencesRootComponent }];

@NgModule({
  declarations: [PreferencesRootComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  ],
})
export class PreferencesModule {}
