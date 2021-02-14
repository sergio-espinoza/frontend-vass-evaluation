import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appCheckUncheck'
})
export class CheckUncheckPipe implements PipeTransform {

  transform(value: any, ...args: string[]): string {
    if (!value) {
      return args[1];
    }
    if (typeof value !== 'string') {
      return args[0];
    }
    return `${value} ${args[0]}`;
  }

}
