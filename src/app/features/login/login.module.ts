import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRootComponent } from './containers/login-root/login-root.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LoginRootComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: LoginRootComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: '**', redirectTo: 'login' },
    ]),
  ],
})
export class LoginModule {}
