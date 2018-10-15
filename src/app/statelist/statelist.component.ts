
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { StateService } from '../services/state.service';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-statelist',
  providers: [ StateService ],
  templateUrl: './statelist.component.html',
  styleUrls: ['./statelist.component.css']
})
export class StatelistComponent implements OnInit {
  StateList;
  constructor(private http: Http, private StateService: StateService,private RouterModule:RouterModule,private router: Router,private route: ActivatedRoute) { }

  ngOnInit() 
  { this.StateList=[];
    this.StateService.getAll()
	.then((data) => 
	{ 
		this.StateList = data;	

	}, 
	(error) => 
	{
		//alert('error');
	});	
  }
  deleteState(State)
	{ 	debugger
		var del={'id':State.StateId,'Name':State.CountryName};
		this.StateService.deleteState(del)
		.then((data) => 
		{
			alert('State Deleted Successfully');
			let index = this.StateList.indexOf(State);
			if (index != -1) {
				this.StateList.splice(index, 1);
			}	
    
			},(error) => 
      {
          alert('error');
      });					
			//alert(data);
		//	this.router.navigate(['/Countrylist']);
		
	}
}
