import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators } from '@angular/forms';

@Directive({
  selector: '[appMaxlength]',
  providers: [{provide: NG_VALIDATORS, useExisting: MaxlengthDirective, multi: true}]
})
export class MaxlengthDirective implements Validator {

   @Input() appMaxlength:Number;

  constructor() { }

  validate(control: AbstractControl): {[key: string]: any}{
  	if(!control.value) return null;
  	return MaxlengthValidator(this.appMaxlength)(control);
  }

}

export function MaxlengthValidator(length: Number): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const forbidden = control.value.length > length;
    return forbidden ? {'appMaxlength': {value: control.value}} : null;
  };
}
