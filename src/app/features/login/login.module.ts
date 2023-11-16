import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRootComponent } from './containers/login-root/login-root.component';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { FormHeaderComponent } from 'src/app/global/components/form-header/form-header.component';

@NgModule({
  declarations: [LoginRootComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      { path: '', component: LoginRootComponent, pathMatch: 'full' },
    ]),
    ReactiveFormsModule,
    FormHeaderComponent
  ],
})
export class LoginModule {}
