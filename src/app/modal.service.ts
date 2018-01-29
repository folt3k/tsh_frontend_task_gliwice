import { Injectable } from '@angular/core';
import { Payment } from './payment';

@Injectable()
export class ModalService {

  payment:Payment;

  constructor() { }

  show(payment:Payment) {
    return this.payment = payment;
  }

  close() {
    return delete this.payment;
  }

}
