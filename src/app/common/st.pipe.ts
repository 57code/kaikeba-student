import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'st'
})
export class StPipe implements PipeTransform {

  transform(value: number, type: 'hours' | 'minutes'): any {
    if (type === 'hours') {
      return Math.floor(value / 60);
    } else if (type === 'minutes') {
      return Math.floor(value % 60);
    }
    return '--';
  }

}
