import {
    ValidatorFn,
    AbstractControl,
    ValidationErrors,
  } from '@angular/forms';
  //idk what is going on here but this is not right
  export function passwordValidation(matchTo: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const c = control.parent?.get(matchTo);
      if(c && c.value !== control.value){
        return {notMatching: true}
      }
  
      return null
    };
  }