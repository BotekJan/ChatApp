import { AuthService } from './../welcome/auth.service';
import { ValidatorFn, AbstractControl, ValidationErrors, AsyncValidatorFn } from "@angular/forms";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

export function usernameExistsValidator(auth: AuthService): AsyncValidatorFn {
    return (control: AbstractControl) => {
      return auth.usernameExists(control.value).pipe(map(res => {
        
        return res ? {usernameExists: true} : null;
      }))

      
    };
  }