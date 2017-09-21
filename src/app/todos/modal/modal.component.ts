import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//import * as jQuery from 'jquery';

declare var jQuery:any;

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() todo;
  @Output() onModalClose = new EventEmitter<any>();
  @Output() onModalSave = new EventEmitter<any>();

  inputs:any = {task:"", description:""};
  isFormValid:boolean = false;
  
  constructor() { }

  ngOnInit() {
  	console.log("i am from modal component");
  	jQuery("#taskModal").modal('show');

  	jQuery('#taskModal').on('hidden.bs.modal',  (e)=> {
  // do something...
  		this.close();
	});
    if(this.todo){ //create -> todo is empty, update -> todo information
      this.inputs = this.todo;
    }
  }

  save(){
  	this.onModalSave.emit(this.inputs);
  	jQuery("#taskModal").modal('hide');
    //this.inputs = {};
  }

  close(){
  	this.onModalClose.emit();
  	jQuery("#taskModal").modal('hide');
   // this.inputs = {};
  }

  validate(){
    this.isFormValid = false;
    // if(!this.inputs.task) this.isFormValid = false;
    // else this.isFormValid = true;
    // if(!this.inputs.description)  this.isFormValid = false;
    // else this.isFormValid = true;
    if(this.inputs.task && 
        this.inputs.description && 
        this.inputs.task.length > 3 && 
        this.inputs.description.length > 10) this.isFormValid = true;
 
  }

validForm(){
  if(this.inputs.task && 
        this.inputs.description && 
        this.inputs.task.length > 3 && 
        this.inputs.description.length > 10) return false;
    return true;
}

}

















