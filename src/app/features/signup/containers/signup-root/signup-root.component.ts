import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { matchValidator } from '../../validators/matchValidator';

@Component({
  templateUrl: './signup-root.component.html',
  styleUrls: ['./signup-root.component.css'],
})
export class SignupRootComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.signupForm.valueChanges.subscribe((value) =>
      console.log(this.signupForm.errors)
    );
  }

  matchValidator = matchValidator;

  signupForm = this.formBuilder.group(
    {
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required, Validators.minLength(8)],
      confirmPassword: ['', Validators.required, Validators.minLength(8)],
      name: ['', Validators.required, Validators.minLength(3)],
    },
    { validators: [this.matchValidator('password', 'confirmPassword')] }
  );
}
