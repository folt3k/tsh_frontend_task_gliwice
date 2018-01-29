import { Component, OnInit } from '@angular/core';

import { PaymentService } from '../payment.service';
import { ModalService } from '../modal.service';
import { Payment } from '../payment';

@Component({
  selector: 'app-payments-list',
  templateUrl: './payments-list.component.html',
  styleUrls: ['./payments-list.component.css']
})
export class PaymentsListComponent implements OnInit {

  payments:Payment[];
  links = [];
  err:boolean;
  page:number = 0;
  pagination:any = [];
  ratingArr:any = Array(5).fill(0).map((x,i) => i+1);

  constructor(
    private paymentService:PaymentService,
    public modalService:ModalService
  ){}

  ngOnInit() {
    this.paymentService.getPayments()
      .subscribe(data => {
        this.payments = data.payments;
        this.pagination = data.pagination;
        this.links = Object.keys(this.pagination.links);
      });
  }

  toNumber(key) {
    return Number(key);
  }

  paginate(key:any) {
    this.paymentService.getPayments(this.pagination.links[key] || '')
      .subscribe(data => {
        this.payments = data.payments;
        this.pagination = data.pagination;
        this.links = Object.keys(this.pagination.links);
      });
  }

  showResults(results:any) {
    if(typeof results === 'string') {
      this.payments = [];
      this.pagination = [];
      this.links = [];
      return this.err = true;
    }
    this.payments = results.payments;
    this.pagination = results.pagination;
    this.links = Object.keys(this.pagination.links);
    this.err = false;
  }

}
