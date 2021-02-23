import { Pipe, PipeTransform } from '@angular/core';
import { stringify } from 'querystring';

@Pipe({
  name: 'priorityName'
})
export class PriorityNamePipe implements PipeTransform {

  transform(value: any, arg: any): unknown {
    if(value.includes(arg)){
      value = 'Sientifico ' + arg;
    }
    return  value;
  }

}
