import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ReceiptDetailsComponent } from './receipt/receipt-details.component';
import { ReceiptSummaryComponent } from './receipt/receipt-summary.component';
import { ReceiptMessageComponent } from "./receipt/receipt-message.component";

@NgModule({
  declarations: [
    AppComponent,
    ReceiptDetailsComponent,
    ReceiptSummaryComponent,
    ReceiptMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
