import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable'; //keep a track of the call
import { Headers, Http, Response, RequestOptions } from '@angular/http'; // make http calls
import 'rxjs/add/operator/catch'; // to capture data on error
import 'rxjs/add/operator/map'; //to capture data on success
import { Todos } from '../interfaces/todos';
import { environment } from '../../environments/environment'

@Injectable()
export class TodosService {
	
  constructor(private http: Http) { }

  getAll():Observable<Todos>{
  	return this.http.get(environment.api+"/todos")
  				.map(this.extractData) //success
    			.catch(this.handleError) //error
  }


  create(inputs:any): Observable<any> {
    return this.http.post(environment.api+"/todos", inputs)
    			.map(this.extractData) //success
    			.catch(this.handleError) //error               
  }

  update(inputs:any): Observable<any> {
    return this.http.put(environment.api+"/todos/"+inputs.id, inputs)
          .map(this.extractData) //success
          .catch(this.handleError) //error               
  }

  remove(inputs:any): Observable<any> {
    return this.http.delete(environment.api+"/todos/"+inputs.id)
          .map(this.extractData) //success
          .catch(this.handleError) //error               
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }
  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }


}
