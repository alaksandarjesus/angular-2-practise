import { Pipe, PipeTransform } from '@angular/core';

declare var _:any;

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(todos: any, args?: any): any {
  	
  	if(_.isEmpty(args.task)) return todos;

    return _.filter(todos, (todo)=>{
    	return todo.task.indexOf(args.task) != -1;
    });
  }

}

