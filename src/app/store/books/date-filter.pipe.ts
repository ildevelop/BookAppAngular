import { PipeTransform, Pipe } from '@angular/core';
import {Observable} from "rxjs";
import {isNullOrUndefined} from "util";


@Pipe({
    name: 'dateFilter'
})
export class DateFilterPipe implements PipeTransform {

    transform(date: Date): boolean {

      let result : boolean ;
      if(isNullOrUndefined(date)) {
        result=this.validateDate(date);
      }else {
        result= false;
      }
     return result;
    }

    validateDate(date: Date):boolean {
      console.log("month="+date.getMonth()+"day="+date.getDay()+"year="+date.getFullYear());
      return date< new Date() && date.getMonth() <=12&&date.getMonth() >0&&
        date.getDay()<32&& date.getDay()>0 && date.getFullYear()<=new Date().getFullYear()&&
        date.getFullYear()>1700;
    }

}
