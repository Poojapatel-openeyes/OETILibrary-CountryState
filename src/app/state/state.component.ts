import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { StateService } from '../services/state.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({


  selector: 'app-state',
  providers: [ StateService ],
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {
  StateEntity;
  CountryList;
  constructor(private http: Http,private StateService: StateService,private router: Router,private route: ActivatedRoute) { }

  ngOnInit()
   {debugger
    this.StateEntity = {};
    this.StateEntity.CountryId='';
    this.StateService.getAllCountry()
		.then((data) => {debugger
			this.CountryList = data;
		
		},
		(error) => {
			//alert('error');
		});
   
		let id = this.route.snapshot.paramMap.get('id');
		if (id) {
		
			this.StateService.getById(id)
				.then((data) => {
					this.StateEntity = data;
				

				},
				(error) => {
					alert('error');
				});
		} else {

			this.StateEntity = {};
			this.StateEntity.StateId = 0;
		
    }
   
  }
  addState(StateForm) {debugger
		let id = this.route.snapshot.paramMap.get('id');
		
		if (StateForm.valid) {
     // this.CountryEntity.CountryId=0;
			this.StateService.add(this.StateEntity)
				.then((data) => {
				
					this.StateEntity = {};
					StateForm.form.markAsPristine();
					 if (id) {
						alert('Country Updated Successfully');
						
					} else {
						alert('Country Added Successfully');
					
				}
					this.router.navigate(['/Statelist']);
				},
				(error) => {
					alert('error');
				
				});
		}
	}
}
