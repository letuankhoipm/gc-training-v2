import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'adult',
  pure: false
})
export class AdultPipe implements PipeTransform {
  transform(value: any[]) {
    return value.filter(v => v.age >=18)
  }

}
