import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  templateUrl: 'preferences-root.component.html',
})
export class PreferencesRootComponent {
  constructor(private formBuilder: FormBuilder) {}

  companyForm = this.formBuilder.group({
    companyName: ['', Validators.required],
    companyCnpj: ['', Validators.required],
    hoursInterval: ['', Validators.required],
    minutesInterval: ['', Validators.required],
    companyLogo: ['', Validators.required],
  });

  savePreferences() {
    console.log(this.companyForm.value);
  }
}
