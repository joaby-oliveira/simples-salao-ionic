import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { matchValidator } from '../../validators/matchValidator';

@Component({
  templateUrl: './signup-root.component.html',
  styleUrls: ['./signup-root.component.css'],
})
export class SignupRootComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  matchValidator = matchValidator;

  signupForm = this.formBuilder.group(
    {
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    },
    { validators: [this.matchValidator('password', 'confirmPassword')] }
  );

  signup() {
    console.log(this.signupForm.value);
  }
}
