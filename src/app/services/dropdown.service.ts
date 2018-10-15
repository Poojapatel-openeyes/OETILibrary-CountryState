import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DropdownService {

  constructor( private http: Http) { }
  getAllDefaultData(){
    debugger
    let promise = new Promise((resolve, reject) => {
      this.http.get('http://localhost/OETILibrary-Country-State/api/' + 'Dropdown/getAllDefaultData',"{'Content-Type': 'application/json','Accept': 'application/json'}")
        .toPromise()
        .then(
          res => { // Success
            resolve(res.json());
          },
          msg => { // Error
        reject(msg);
        //this.globals.isLoading = false;
       // this.router.navigate(['/pagenotfound']);
          }
        );
    });		
    return promise;
    }
    getStateList(CountryId){ 
      let promise = new Promise((resolve, reject) => {
        this.http.get('http://localhost/OETILibrary-Country-State/api/' + 'Dropdown/getStateList/' + CountryId,"{'Content-Type': 'application/json','Accept': 'application/json'}" )
          .toPromise()
          .then(
            res => { // Success
              resolve(res.json());
            },
            msg => { // Error
          reject(msg);
          //this.globals.isLoading = false;
          //this.router.navigate(['/pagenotfound']);
            }
          );
      });		
      return promise;
      }  
}
