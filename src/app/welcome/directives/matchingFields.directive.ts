import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidationErrors, FormGroup, ValidatorFn, AbstractControl } from '@angular/forms';

import { matchValidator } from '../validators/matchingFields.validator';

@Directive({
    selector: '[mustMatch]',
    providers: [{ provide: NG_VALIDATORS, useExisting: MustMatchDirective, multi: true }]
})
export class MustMatchDirective implements Validator {
    @Input() mustMatch = '';


    validate(control: AbstractControl): ValidationErrors | null {
        return this.mustMatch ? matchValidator(this.mustMatch)(control) : null
    }
}