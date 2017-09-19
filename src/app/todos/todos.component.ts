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
  	this.modal = true;
  }

  onModalClose(){
  	console.log("Modal is closed");
  	this.modal = false;
  }

  onModalSave(data){
  	console.log("Modal is closed, but send data to server to save");
  	console.log("data", data);
  	data.marker = "alaksandarjesus";
  	this.ts.create(data).subscribe(
  		(data) => this.onModalSaveSuccess(data),
  		(error) => this.onModalSaveError(error)
  		)
  		this.modal = false;
  }

  onModalSaveSuccess(data){
  	//processing of your data - 100 lines of code 
  	this.todos.push(data)
  }

  onModalSaveError(error){
  	console.log(error);
  }

}


















