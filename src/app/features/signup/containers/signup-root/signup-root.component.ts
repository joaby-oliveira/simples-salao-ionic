import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { matchValidator } from '../../validators/matchValidator';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './signup-root.component.html',
  styleUrls: ['./signup-root.component.css'],
})
export class SignupRootComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  matchValidator = matchValidator;
  $userType = new Observable();

  signupForm = this.formBuilder.group(
    {
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      userType: ['client', Validators.required],
    },
    { validators: [this.matchValidator('password', 'confirmPassword')] }
  );

  signup() {
    console.log(this.signupForm.value);
  }
}
