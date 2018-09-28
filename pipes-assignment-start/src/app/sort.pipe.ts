import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, prop: string): any {
    console.log(value, prop);
    (<any[]>value).sort((a: any, b: any) => {
      console.log(a[prop], b[prop]);
      if (a[prop] < b[prop]) {
        return -1;
      }
      else if (a[prop] > b[prop]) {
        return 1;
      }
      else {
        return 0;
      }
    });

    return value;
  }

}
