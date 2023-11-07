import {Pipe, PipeTransform} from '@angular/core';
import { SelectItem } from 'primeng/primeng';


@Pipe({
  name: 'selectItemPipe'
})
export class SelectItemPipe implements PipeTransform {

  transform(value: any, labelProperty: string,idvalue): SelectItem[] {
    if (value)
      return value.map(function (item) {
        return {
          label: item[labelProperty],
          value: item[idvalue]
        }
      });
    else return [];
  }

}