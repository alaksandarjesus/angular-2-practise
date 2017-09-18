import { Component, OnInit } from '@angular/core';
import { SharedService } from './services/shared.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[]
})
export class AppComponent implements OnInit{
  title = 'app works fine!';
  username:any ="Alpha";

  constructor(private shared:SharedService){

  }

  ngOnInit(){
  	this.shared.set("username", this.username);
  	console.log(this.shared.get("username"));
  }
  
  onLogout(loggedUser){
  	console.log(loggedUser)
  	this.username = loggedUser;
  }





}
