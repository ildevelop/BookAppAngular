/**
 * Created by Radu on 3/12/2017.
 */
import { PipeTransform, Pipe } from '@angular/core';
import {replaceVarInExpression} from "@angular/compiler/src/output/output_ast";

@Pipe({
  name: 'titleFilter'
})
export class TitleFilterPipe implements PipeTransform {
  transform(title: string): string {
   //  let regex = RegExp("[a-zA-Z ]*");
   //  regex.r
   // // RegExp.prototype.("[a-zA-Z ]*", title);
   //  console.log(title);
   //  return title;
    // console.log(targetMatched );
   // let reg = new RegExp(/[a-zA-Z ]*/);
//    title =title.replace(/\b\w/g, function(l){ return l.toUpperCase() });
    title =title.replace(/[^A-Z a-z]/gi, ' ')
    title = title.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    return title;
  }
}
