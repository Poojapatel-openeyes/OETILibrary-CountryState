import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { CountryService } from '../services/country.service';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-countrylist',
  providers: [ CountryService ],
  templateUrl: './countrylist.component.html',
  styleUrls: ['./countrylist.component.css']
})
export class CountrylistComponent implements OnInit {
  CountryList;
  constructor(private http: Http, private CountryService: CountryService,private RouterModule:RouterModule,private router: Router,private route: ActivatedRoute) { }

  ngOnInit() 
  { this.CountryList=[];
    this.CountryService.getAll()
	.then((data) => 
	{ 
		this.CountryList = data;	

	}, 
	(error) => 
	{
		//alert('error');
	});	
  }
  deleteCountry(Country)
	{ 	debugger
		var del={'id':Country.CountryId,'Name':Country.CountryName};
		this.CountryService.delete(del)
		.then((data) => 
		{
			alert('Country Deleted Successfully');
			let index = this.CountryList.indexOf(Country);
			if (index != -1) {
				this.CountryList.splice(index, 1);
			}	
    
			},(error) => 
      {
          alert('error');
      });					
			//alert(data);
		//	this.router.navigate(['/Countrylist']);
		
	}
}
