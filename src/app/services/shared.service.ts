import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {
 private storage = {};
  constructor() { }

  get(key){
  	return this.storage[key] || null;
  }

  set(key, value){
  	this.storage[key] = value;
  	return true;
  }


}
