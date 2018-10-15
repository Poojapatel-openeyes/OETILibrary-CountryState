import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { CountryService } from '../services/country.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-country',
  providers: [ CountryService ],
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  CountryEntity;
  CountryEntity1;
  constructor(private http: Http,private CountryService: CountryService,private router: Router,private route: ActivatedRoute) { }

  ngOnInit()
   {
		this.CountryEntity = {};
		let id = this.route.snapshot.paramMap.get('id');
		if (id) {
		
			this.CountryService.getById(id)
				.then((data) => {
					this.CountryEntity = data;
					this.CountryEntity1 = {};
					this.CountryEntity1.old_CountryName=data['CountryName'];
					this.CountryEntity1.old_CountryAbbreviation=data['CountryAbbreviation'];

				},
				(error) => {
					alert('error');
				});
		} else {
			this.CountryEntity1 = {};
			this.CountryEntity = {};
			this.CountryEntity.CountryId = 0;
		
		}
  }
  addCountry(CountryForm) {debugger
		let id = this.route.snapshot.paramMap.get('id');
		
		if (CountryForm.valid) {
     // this.CountryEntity.CountryId=0;
			this.CountryService.add({'old':this.CountryEntity1,'new':this.CountryEntity})
				.then((data) => {
				
					this.CountryEntity = {};
					CountryForm.form.markAsPristine();
					 if (id) {
						alert('Country Updated Successfully');
						
					} else {
						alert('Country Added Successfully');
					
				}
					this.router.navigate(['/Countrylist']);
				},
				(error) => {
					alert('error');
				
				});
		}
	}
}
