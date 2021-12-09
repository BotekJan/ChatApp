import { usernameExistsValidator } from './../validators/username-exists.validator';
import { Directive } from '@angular/core';
import { AuthService } from '../welcome/auth.service';
import { NG_ASYNC_VALIDATORS, AsyncValidator, AsyncValidatorFn, FormControl } from '@angular/forms';

@Directive({
  selector: '[passwordValidator]',
  providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: passwordValidationDirective, multi:true}]
})

export class passwordValidationDirective implements AsyncValidator {
  validator: AsyncValidatorFn;
    
    constructor(private auth: AuthService) {
      this.validator = usernameExistsValidator(auth);
    }
    
    validate(c: FormControl) {
      return this.validator(c);
    }

}