import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templatedriven',
  templateUrl: './templatedriven.component.html',
  styleUrls: ['./templatedriven.component.css']
})
export class TemplatedrivenComponent implements OnInit {

  user:any = {username:"", password:""};
  
  constructor() { }

  ngOnInit() {

  }


  onSubmit(){
  	console.log(this.user);

  }
}
