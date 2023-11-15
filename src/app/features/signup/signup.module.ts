import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SignupRootComponent } from './containers/signup-root/signup-root.component';
import { IonicModule } from '@ionic/angular';
import { FormHeaderComponent } from 'src/app/global/components/form-header/form-header.component';

const routes: Routes = [{ path: '', component: SignupRootComponent }];

@NgModule({
  declarations: [SignupRootComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    IonicModule,
    FormHeaderComponent,
  ],
})
export class SignupModule {}
