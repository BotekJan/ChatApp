import {
  ValidatorFn,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';

export function matchValidator(matchTo: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const c = control.parent?.get(matchTo);
    if(c && c.value !== control.value){
      return {notMatching: true}
    }

    return null
  };
}
