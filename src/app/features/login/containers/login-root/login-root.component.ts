import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginApi } from '../../api/login.api';
import { ToastController } from '@ionic/angular';
import { Router, RouterLink } from '@angular/router';

@Component({
  templateUrl: './login-root.component.html',
  styleUrls: ['./login-root.component.css'],
})
export class LoginRootComponent {
  constructor(
    private formBuilder: FormBuilder,
    private loginApi: LoginApi,
    private toastController: ToastController,
    private router: Router
  ) {}

  loginForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  login() {
    if (this.loginForm.valid) {
      this.loginApi
        .login({
          email: this.loginForm.value.email ?? '',
          password: this.loginForm.value.password ?? '',
        })
        .subscribe({
          next: async (response) => {
            localStorage.setItem('bearerToken', response.result.token);
            this.router.navigate(['/home']);
          },
          error: async () => {
            const toast = await this.toastController.create({
              message: 'E-mail ou senha incorretos',
              duration: 2000,
              position: 'top',
              color: 'danger',
            });

            await toast.present();
          },
        });
    }
  }
}
