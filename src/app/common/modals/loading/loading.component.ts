import { Component, OnInit, Input } from '@angular/core';

declare var jQuery:any;
@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

	@Input() show:any;
  constructor() { }

  ngOnInit() {
  	if(!this.show){
  		jQuery("#loadingModal").modal("hide");
  		return;
  	}
  	jQuery("#loadingModal").modal({
  		"backdrop":"static",
  		"show": true
  	});
  }

}
