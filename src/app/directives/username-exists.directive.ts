import { passwordValidation } from './../validators/validPassword.validator';
import { Directive } from '@angular/core';
import { AuthService } from '../welcome/auth.service';
import { NG_ASYNC_VALIDATORS, AsyncValidator, AsyncValidatorFn, FormControl, Validator, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[usernameExistsValidator]',
  providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: usernameExistsValidatorDirective, multi:
true}]
})

export class usernameExistsValidatorDirective implements Validator {
  validator: ValidatorFn;
    
    constructor(private auth: AuthService) {
      this.validator = passwordValidation('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$');
    }
    
    validate(c: FormControl) {
      return this.validator(c);
    }

}