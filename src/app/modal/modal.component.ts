import { Component } from '@angular/core';
import { Payment } from '../payment';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  ratingArr:any = Array(5).fill(0).map((x,i) => i+1);


  constructor(
   public modalService:ModalService
  ) {}
}
