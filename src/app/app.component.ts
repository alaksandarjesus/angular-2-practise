import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  string1:string;
  string2:string;
  value1:string;
  hidePara:boolean;
  strings:any;
  changeColor:boolean = false;
  filterStd:string = '';
  students:any;
  dummyStudents:any;
 	constructor(){ //use it only for loading libraries or your external service
 		console.log("I am from constructor")

 	}

 	ngOnInit(){ //start from here
 		console.log("I am from ngOnInit")
 		this.string1="I am change"; //not passing any html tags
 		this.string2="<h2>I am with html tags</h2>";// with html tags
 		this.value1 = "alpha";
 		this.hidePara = false;
 		//this.hideParaFn();
 		this.initializeStudents();
 	}

 	initializeStudents(){
 		//backend call to fetch all my students database
 		this.students = [{fname:"alpha"}, {fname:"beta"}]

 	}

 	getStudents(){
 		console.log("i am from get students")
 		if(!this.filterStd)
 			return this.students;
 		this.dummyStudents = [];
 		for(var i =0 ; i < this.students.length; i++){
 			if(this.filterStd == this.students[i].fname)
 				this.dummyStudents.push(this.students[i])
 		}
 		return this.dummyStudents;
 	}
  

 	hideParaFn(){

 		setTimeout(()=>{
 			this.hidePara = true;
 			this.strings = {};
 			this.strings.number3 = "Hello Number 3";
 			this.changeColor = true;
 		}, 3000)
 	}

 	onBtnClick(event){
 		console.log(event.target)
 		console.log("Button Clicked")
 	}



}







