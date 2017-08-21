import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tlogo'
})
export class LogoPipe implements PipeTransform {

  transform(value: string, bool?: boolean): any {
    let result = value;
    if (!bool) {
      result = value.slice(0, 1);
    }
    return result;
  }

}
