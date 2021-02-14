import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appCloneObject'
})

export class CloseObjectPipe implements PipeTransform {
  transform(value: any, objectType: 'object' | 'array'): any {
    if (objectType === 'object') {
      return { ...value };
    }

    return [...value];
  }
}
