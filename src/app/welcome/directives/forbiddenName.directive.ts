import { Directive, Input } from "@angular/core";
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from "@angular/forms";
import { forbiddenNameValidator } from "../validators/forbiddenName.validator";

@Directive({
    selector: '[appForbiddenName]',
    providers: [{provide: NG_VALIDATORS, useExisting: ForbiddenValidatorDirective, multi: true}]
  })
  export class ForbiddenValidatorDirective implements Validator {
    @Input('appForbiddenName') forbiddenName = '';
  
    validate(control: AbstractControl): ValidationErrors | null {
      return this.forbiddenName ? forbiddenNameValidator(new RegExp(this.forbiddenName, 'i'))(control)
                                : null;
    }
  }