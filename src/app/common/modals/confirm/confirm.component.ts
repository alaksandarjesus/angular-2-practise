import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

declare var jQuery:any;

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  @Input() text:any;
  @Output() onYes = new EventEmitter<any>();
  @Output() onNo = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {

  	jQuery("#confirmModal").modal("show");
  }


  save(){ // function is called when user press yes button
  	this.onYes.emit();
  	jQuery("#confirmModal").modal('hide');
    //this.inputs = {};
  }

  close(){// function is called when user press no button
  	this.onNo.emit();
  	jQuery("#confirmModal").modal('hide');
   // this.inputs = {};
  }

}
