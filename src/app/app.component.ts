
import { Component } from '@angular/core';

 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  // addScript: boolean = false;
  // paypalLoad: boolean = true;
  
  // finalAmount: number = 1;
  // finalAmount1: number = 1;
  // paypalConfig = {
  //   env: 'sandbox',
  //   client: {
  //     sandbox: 'AVae-_pCZcevpsso7uIEZkRRMR7vwrLGr_yiCuWAQJxGS3_5vCcLNjvd10k-xUXWRRW0KvgcoPjq9bn9',
  //     production: '<your-production-key here>'
  //   },
  //   commit: true,
  //   payment: (data, actions) => {
  //     return actions.payment.create({
  //       payment: {
  //         transactions: [
  //           { amount: { total: this.finalAmount+this.finalAmount1, currency: 'USD' } }
  //         ]
  //       }
  //     });
  //   },
  //   onAuthorize: (data, actions) => {
  //     return actions.payment.execute().then((payment) => {
  //       //Do something when payment is successful.
  //     })
  //   }
  // };
 
  // ngAfterViewChecked(): void {
  //   if (!this.addScript) {
  //     this.addPaypalScript().then(() => {
  //       paypal.Button.render(this.paypalConfig, '#paypal-checkout-btn');
  //       this.paypalLoad = false;
  //     })
  //   }
  // }
  
  // addPaypalScript() {
  //   this.addScript = true;
  //   return new Promise((resolve, reject) => {
  //     let scripttagElement = document.createElement('script');    
  //     scripttagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
  //     scripttagElement.onload = resolve;
  //     document.body.appendChild(scripttagElement);
  //   })
  // }
 
}
 


