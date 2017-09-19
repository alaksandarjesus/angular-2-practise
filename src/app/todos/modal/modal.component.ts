import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//import * as jQuery from 'jquery';

declare var jQuery:any;

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {


  @Output() onModalClose = new EventEmitter<any>();
  @Output() onModalSave = new EventEmitter<any>();

  inputs:any = {task:"", description:""};
  
  constructor() { }

  ngOnInit() {
  	console.log("i am from modal component");
  	jQuery("#taskModal").modal('show');

  	jQuery('#taskModal').on('hidden.bs.modal',  (e)=> {
  // do something...
  		this.close();
	})
  }

  save(){
  	this.onModalSave.emit(this.inputs);
  	jQuery("#taskModal").modal('hide');
  }

  close(){
  	this.onModalClose.emit();
  	jQuery("#taskModal").modal('hide');
  }

}
