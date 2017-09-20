import { Component, OnInit } from '@angular/core';
import { TodosService } from '../services/todos.service';

declare var _:any;

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  providers:[TodosService]
})
export class TodosComponent implements OnInit {

  modal:boolean = false;
  todos:any = [];
  todo:any;
  constructor(private ts:TodosService) { }

  ngOnInit() {
  	this.getTodos();
  }


  getTodos(){
  	this.ts.getAll().subscribe(
  		(data) => this.onGetAllSuccess(data),
  		(error) => this.onGetAllError(error)
  		)
  }

  onGetAllSuccess(data){
  	//processing
  	//_ filter -> array of object with matching values and returns as an array
  	this.todos = _.filter(data, (todo)=>{
  		return todo.marker == 'alaksandarjesus';
  	});
  	
  }

  onGetAllError(error){
  	console.log(error)
  }

  openModal(){
    this.todo = null;
  	this.modal = true;
  }

  update(todo){
    console.log("todo", todo);
    this.modal = true;
    this.todo = _.clone(todo); //to understand why to use _.clone, remove the clone and check the changes again in the browser

  }

  onModalClose(){
  	console.log("Modal is closed");
  	this.modal = false;
  }

  onModalSave(data){
  	console.log("Modal is closed, but send data to server to save");
  	console.log("data", data);
  	data.marker = "alaksandarjesus";
    if(!data.id){ // for new todo, there will be no id
      this.ts.create(data).subscribe(
      (data) => this.onCreateSuccess(data),
      (error) => this.onCreateError(error)
      )
    }else{
      this.ts.update(data).subscribe(
      (data) => this.onUpdateSuccess(data),
      (error) => this.onUpdateError(error)
      )
    }
  	
  		this.modal = false;
  }

  onCreateSuccess(data){
  	//processing of your data - 100 lines of code 
  	this.todos.push(data)
  }

  onCreateError(error){
  	console.log(error);
  }

  onUpdateSuccess(data){
    console.log(data)
    //javascript

    // for(var i =0 ; i < this.todos.length; i++){
    //   if(this.todos[i].id == data.id){
    //     console.log(this.todos[i])
    //     this.todos[i] = data;
    //   }

    // }

//lodash way to update data
    let getIndexOfRow = _.findIndex(this.todos, {id:data.id});
    this.todos.splice(getIndexOfRow, 1, data);


  }

  onUpdateError(data){

  }

  remove(data){
    let confirmDelete = confirm("Are you sure if you want to delete task " + data.task);
    if(confirmDelete){
      this.ts.remove(data).subscribe(
           (response) => this.onRemoveSuccess(response, data),
           (error) => this.onRemoveError(error)
      )
    }
  }

  onRemoveSuccess(response, data){
    //javascript
    // console.log(this.todos);
    // for(var i =this.todos.length-1; i >= 0; i--){
    //   if(this.todos[i].id == data.id){
    //     //delete this.todos[i];
    //     this.todos.splice(i,1);
    //   }
    // }

    //lodash
    // _.remove(this.todos, (todo)=>{
    //   return todo.id == data.id
    // });

    _.remove(this.todos, (todo)=> todo.id == data.id);

  }

  onRemoveError(error){

  }

}
































