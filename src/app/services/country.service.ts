import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class CountryService {


  constructor( private http: Http) { }
  add(CountryEntity)
 {    debugger
	let promise = new Promise((resolve, reject) => {
    this.http.post('http://localhost/OETILibrary-Auditloge/api/Country/add', CountryEntity, "{'Content-Type': 'application/json','Accept': 'application/json'}")
      .toPromise()
      .then( 
        res => { // Success 
			let result = res.json();
		
		  resolve(res.json());
        },
        msg => { // Error
      reject(msg.json());
   
    
        }
      );
	});		
	return promise;
  }
  
    
  getAll()
  {debugger
	let promise = new Promise((resolve, reject) => {
    this.http.get('http://localhost/OETILibrary-Auditloge/api/' + 'Country/getAll')
      .toPromise()
      .then(
        res => { // Success
          resolve(res.json());
        },
        msg => { // Error
		  reject(msg.json());
        }
      );
	});		
	return promise;
  }

  delete(del)
  {debugger
	let promise = new Promise((resolve, reject) => {		
    this.http.post('http://localhost/OETILibrary-Auditloge/api/' + 'Country/delete', del)
      .toPromise()
      .then(
        res => { // Success
          resolve(res.json());
        },
        msg => { // Error
		  reject(msg.json());
        }
      );
	});		
	return promise;
  }
  getById(CountryId)
  {debugger
	let promise = new Promise((resolve, reject) => {
    this.http.get('http://localhost/OETILibrary-Auditloge/api/' + 'Country/getById/' + CountryId)
      .toPromise()
      .then(
        res => { // Success
          resolve(res.json());
        },
        msg => { // Error
		  reject(msg.json());
        }
      );
	});		
	return promise;
  }  
  getAllaudit()
  {debugger
	let promise = new Promise((resolve, reject) => {
    this.http.get('http://localhost/OETILibrary-Auditloge/api/' + 'Country/getAllaudit')
      .toPromise()
      .then(
        res => { // Success
          resolve(res.json());
        },
        msg => { // Error
		  reject(msg.json());
        }
      );
	});		
	return promise;
  }

}
