
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { DropdownService } from '../services/dropdown.service';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-dropdown',
  providers: [ DropdownService ],
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  DropdownEntity;
  stateList;
  CountryList;
  constructor(private http: Http, private DropdownService: DropdownService,private RouterModule:RouterModule,private router: Router,private route: ActivatedRoute) { }


  ngOnInit() 
  {  
    this.DropdownEntity = {};
    this.DropdownService.getAllDefaultData()
    //.map(res => res.json())
    .then((data) => {
     this.CountryList = data['country'];
     this.stateList = data['state'];
    },
    (error) => {
      //alert('error');
    
      //this.router.navigate(['/admin/pagenotfound']);
    });
  
}
getStateList(DropdownForm) {
  DropdownForm.form.controls.StateId.markAsDirty();
  this.DropdownEntity.StateId='';
  if (this.DropdownEntity.CountryId > 0) {
    this.DropdownService.getStateList(this.DropdownEntity.CountryId)
      .then((data) => {
        this.stateList = data;
      },
      (error) => {
        //alert('error');
      });
  } else {
    this.stateList = [];
  }
}
}