import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  templateUrl: './login-root.component.html',
  styleUrls: ['./login-root.component.css'],
})
export class LoginRootComponent {
  constructor(private formBuilder: FormBuilder) {}

  loginForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  })

  login() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value)
    }
  }
}
