import { Validators as vl, AbstractControl, ValidatorFn, ValidationErrors, Validators, FormGroup, ControlContainer, Validator } from '@angular/forms';

type TCustomValResult = { [key: string]: boolean } | null;
// type TCustomValWithControl = (controlField: AbstractControl) => TCustomValResult;

// export function getValInputCustom(
//   length: number, customVal: TCustomValWithControl)
//   : ((control: AbstractControl) => ValidationErrors)[] {
//   return [vl.required, vl.minLength(length), vl.maxLength(length), customVal];
// }

export function ƒMatchedValidator(controlName: string, matchingControlName: string): any {
  return (formGroup: FormGroup) => {
    const control = formGroup.get(controlName);
    const matchingControl = formGroup.get(matchingControlName);
    if (control?.value !== matchingControl?.value) {
      matchingControl?.setErrors({ confirmedValidator: true });
      return;
    }
    matchingControl?.setErrors(null);
  };
}

export function ƒIsNumberValidator(): ValidatorFn {
  return (control: AbstractControl): TCustomValResult => {
    return (isNaN(+control?.value)) ? { isNumber: false } : null;
  };
}

export function ƒMinNumberValue(entryMinValue: number): ValidatorFn {
  return (control: AbstractControl): TCustomValResult => {
    return (control.value < entryMinValue) ? { min: false } : null;
  };
}
export function ƒMaxNumberValue(entryMaxValue: number): ValidatorFn {
  return (control: AbstractControl): TCustomValResult => {
    return (control.value > entryMaxValue) ? { max: false } : null;
  };
}

export function ƒIsIntegerValidator(): ValidatorFn {
  return (control: AbstractControl): TCustomValResult => {
    return (!Number.isInteger(+control.value)) ? { integer: false } : null;
  };
}

export function ƒHasStringValidator(evaluatedString: string): ValidatorFn {
  return (control: AbstractControl): TCustomValResult => {
    const hasString = (control?.value as string).includes(evaluatedString);

    return (!hasString) ? { hasString: false } : null;
  };
}

export function ƒExpirationDate(
  currentMonth: number, currentYear: number, maxLength: number
): ValidatorFn {
  return (control: AbstractControl): TCustomValResult => {
    if (!control.value.includes('/') || control.value.length < maxLength) {
      return { isExpired: true };
    }
    const [month, year] = (control.value as string).split('/');

    if (currentYear > +year) { return { isExpired: true }; }
    if (((currentYear * 100) + currentMonth + 1) > (+year * 100) + (+month)) {
      return { isExpired: true };
    }
    return null;
  };
}
