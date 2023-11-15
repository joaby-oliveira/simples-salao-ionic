import { AbstractControl, ValidatorFn } from '@angular/forms';

export function matchValidator(
  controlName: string,
  matchingControlName: string
): ValidatorFn {
  return (abstractControl: AbstractControl) => {
    const control = abstractControl.get(controlName);
    const matchingControl = abstractControl.get(matchingControlName);

    if (
      matchingControl!.errors &&
      !matchingControl!.errors?.['confirmedValidator']
    ) {
      return null;
    }

    if (control!.value !== matchingControl!.value) {
      const error = { confirmedValidator: 'As senhas devem ser iguais.' };
      matchingControl!.setErrors(error);
      return error;
    } else {
      matchingControl!.setErrors(null);
      return null;
    }
  };
}
