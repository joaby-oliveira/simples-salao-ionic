import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PreferencesApi } from '../api/preferences.api';
import { map } from 'rxjs';

@Component({
  templateUrl: 'preferences-root.component.html',
})
export class PreferencesRootComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private preferencesApi: PreferencesApi
  ) {}

  ngOnInit(): void {
    this.preferencesApi
      .getCompanies()
      .pipe(map((result) => result.result.result[0]))
      .subscribe((preferences) => {
        this.companyForm.patchValue(preferences);
      });
  }

  companyForm = this.formBuilder.group({
    name: ['', Validators.required],
    cnpj: ['', Validators.required],
    timeUnit: ['', Validators.required],
    openingTime: ['', Validators.required],
    closingTime: ['', Validators.required],
  });

  savePreferences() {
    console.log(this.companyForm.value);
  }
}
