import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SharedService } from '../services/shared.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[]
})
export class HomeComponent implements OnInit {
 @Input() username:any;
 @Output() onLogout=new EventEmitter();
  constructor(private shared:SharedService) { }

  ngOnInit() {
  	//console.log("this.username", this.username)
  	console.log(this.shared.get("username"));
  }

  logout(){
  	this.username = 'beta';
  	this.onLogout.emit(this.username)
  }

}
