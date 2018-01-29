import { Component, OnInit,Output, EventEmitter } from '@angular/core';

import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() emitResults: EventEmitter<any> = new EventEmitter<any>();
  model = {
    query: '',
    rating: ''
  }

  constructor(
    private paymentService:PaymentService
  ) { }

  ngOnInit() {
  }

  search() {
    let query = '';

    for(let key in this.model) {
      if(this.model[key] != '') {
        query = query.concat(key+'='+this.model[key]+'&');
      }
    }
    
    this.paymentService.getPayments(query)
      .subscribe(data => {
        this.emitResults.emit(data);
      });
  }

  reset() {
    this.paymentService.getPayments()
      .subscribe(data => {
          this.emitResults.emit(data);
          this.model = {query:'',rating:''}
      });
    }
}
