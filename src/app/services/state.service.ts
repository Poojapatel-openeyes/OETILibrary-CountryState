import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


import { Router } from '@angular/router';
@Injectable()
export class StateService {

 constructor(private router: Router,private http: Http) {  }
 
 add(StateEntity){ 
	let promise = new Promise((resolve, reject) => {
    this.http.post('http://localhost/OETILibrary-Country-State/api/' + 'State/addState', StateEntity)
      .toPromise()
      .then(
        res => { // Success
          resolve(res);
        },
        msg => { // Error
      reject(msg);

      this.router.navigate(['/pagenotfound']);
        }
      );
	});		
	return promise;
  }
 
 
 getAll(){ debugger
	let promise = new Promise((resolve, reject) => {
    this.http.get('http://localhost/OETILibrary-Country-State/api/'+ 'State/getAll',"{'Content-Type': 'application/json','Accept': 'application/json'}")
      .toPromise()
      .then(
        res => { // Success
          resolve(res.json());
        },
        msg => { // Error
      reject(msg);
  
      this.router.navigate(['/pagenotfound']);
        }
      );
	});		
	return promise;
  }
  
  
  deleteState(del){debugger
	let promise = new Promise((resolve, reject) => {		
    this.http.post('http://localhost/OETILibrary-Country-State/api/'+ 'State/delete', del)
      .toPromise()
      .then(
        res => { // Success
          resolve(res.json());
        },
        msg => { // Error
      reject(msg);

      this.router.navigate(['/pagenotfound']);
        }
      );
	});		
	return promise;
  }
  
  
  getById(id){
	let promise = new Promise((resolve, reject) => {
    this.http.get('http://localhost/OETILibrary-Country-State/api/' + 'State/getById/' + id)
      .toPromise()
      .then(
        res => { // Success
          resolve(res.json());
        },
        msg => { // Error
      reject(msg);

      this.router.navigate(['/pagenotfound']);
        }
      );
	});		
	return promise;
  }  
  
  
   getAllCountry()
  {
	let promise = new Promise((resolve, reject) => {
    this.http.get('http://localhost/OETILibrary-Country-State/api/' + 'State/getAllCountry',"{'Content-Type': 'application/json','Accept': 'application/json'}")
      .toPromise()
      .then(
        res => { // Success
          resolve(res.json());
        },
        msg => { // Error
      reject(msg);
  
      this.router.navigate(['/pagenotfound']);
      
        }
      );
	});		
	return promise;
  }

}
