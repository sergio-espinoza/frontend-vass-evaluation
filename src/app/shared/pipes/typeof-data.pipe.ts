import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appTypeofData'
})
export class TypeOfDataPipe implements PipeTransform {
  transform(value: any, args: string): boolean {
    const typeofValue = typeof value;
    if (typeofValue === 'undefined') { return false; }
    return typeofValue === args;
  }
}

