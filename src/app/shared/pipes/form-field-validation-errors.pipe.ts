import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'formFieldValidationErrors'
})
export class FormFieldValidationErrorsPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
