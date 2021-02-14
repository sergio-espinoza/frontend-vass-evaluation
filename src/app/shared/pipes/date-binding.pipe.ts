import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appDateBinding'
})

export class DateBindingPipe implements PipeTransform {
  transform(value: any, ...args: any[]): number {
    if (!value) { return 0; }
    return new Date(value).getTime();
  }
}
