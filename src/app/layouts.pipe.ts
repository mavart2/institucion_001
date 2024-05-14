import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'layouts'
})
export class LayoutsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
