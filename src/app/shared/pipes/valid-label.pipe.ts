import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appValidLabel'
})
export class ValidLabelPipe implements PipeTransform {
  transform(value: any, args: 'string'): string {
    return value;
  }
}
