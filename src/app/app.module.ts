import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { PaymentService }  from './payment.service';
import { ModalService }  from './modal.service';
import { SearchComponent } from './search/search.component';
import { PaymentsListComponent } from './payments-list/payments-list.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    PaymentsListComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,HttpModule,FormsModule
  ],
  providers: [PaymentService,ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
