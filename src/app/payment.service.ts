import { Injectable } from '@angular/core';
import { Http } from '@angular/http';  
import 'rxjs/add/operator/map';

@Injectable()
export class PaymentService {

  constructor(
    private http:Http
  ) { }

  getPayments(queries?:string) {

    let query:string = 'http://test-api.kuria.tshdev.io/'+'?'+queries || '';

    return this.http.get(query).map((res) => {
        if(res['_body'] == 'An error occured!') {
          return res.text();
        }
        return res.json();
    });
  }
}
