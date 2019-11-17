import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'itemfiltercount'
})
export class ItemfiltercountPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
       if(value <= 0){
            value = 0;
            return value
       }
    return value;
  }

}
