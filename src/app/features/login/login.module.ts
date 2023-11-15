import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRootComponent } from './containers/login-root/login-root.component';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginRootComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      { path: '', component: LoginRootComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: '**', redirectTo: 'login' },
    ]),
    ReactiveFormsModule
  ],
})
export class LoginModule {}
