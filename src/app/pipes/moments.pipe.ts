import { Pipe, PipeTransform } from '@angular/core';

declare var moment:any;

@Pipe({
  name: 'moments'
})
export class MomentsPipe implements PipeTransform {

  transform(value: any, action?: any, param1?:any): any {
   // return moment(value).fromNow();
   if(action == 'format'){
   return moment(value).format(param1);
   }
   if(action == 'fromNow'){
   return moment(value).fromNow();
   }
  }

}
