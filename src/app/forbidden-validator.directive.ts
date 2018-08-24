import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator, ValidatorFn} from '@angular/forms';

// 不帶參數
// export function forbiddenNameValidator(control: AbstractControl) {
//   const nameRe = /Mike/;
//   const name = control.value;
//   return nameRe.test(name) ? {'forbiddenName': true} : null;
// }

// 帶參數
export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? {'forbiddenName': {value: control.value}} : null;
  };
}

@Directive({
  selector: '[appForbiddenName]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: ForbiddenValidatorDirective,
    multi: true
  }]
})
export class ForbiddenValidatorDirective implements Validator {

  @Input('appForbiddenName')
  forbiddenName: string;

  constructor() {
  }

  registerOnValidatorChange(fn: () => void): void {
  }

  validate(control: AbstractControl): { [key: string]: any } | null {
    return this.forbiddenName ? forbiddenNameValidator(new RegExp(this.forbiddenName, 'i'))(control) : null;
  }

}
