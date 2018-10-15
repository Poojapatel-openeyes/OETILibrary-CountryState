
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { CountryComponent } from './country/country.component';
import { CountrylistComponent } from './countrylist/countrylist.component';

import { CountryService } from './services/country.service';
import { DropdownComponent } from './dropdown/dropdown.component';
import { StateComponent } from './state/state.component';
import { StatelistComponent } from './statelist/statelist.component';
@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
  
    HttpModule,
    FormsModule,
    RouterModule.forRoot([		
      {
        path : '',
        component : DropdownComponent
      },	
      {
        path : 'Country',
        component : CountryComponent
     
      },
      {
        path : 'Countrylist',
        component : CountrylistComponent
     
      },
      {
        path : 'State',
        component : StateComponent
     
      },
      {
        path : 'State/edit/:id',
        component : StateComponent
     
      },
      {
        path : 'Statelist',
        component : StatelistComponent
     
      },
      {
        path : 'home',
        component : DropdownComponent
     
      },
      { path : 'Country/edit/:id', component : CountryComponent },
    ])
    
   
  ],
  providers: [CountryService],
  declarations: [ AppComponent, CountryComponent, CountrylistComponent, DropdownComponent, StateComponent, StatelistComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}