import { Component, OnInit } from '@angular/core';
import { Entry, Receipt } from "./shared/receipt";
import { ReceiptService } from "./shared/receipt.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ReceiptService]
})
export class AppComponent {
  title = 'app';
  private _receipt: Receipt;
  set receipt(v: Receipt) {
    this._receipt = v;
    this.message = v.entries.length >= 1? 'The last entry is ' + v.entries[v.entries.length-1].name : 'There is none left.';
  }
  get receipt(): Receipt {
    return this._receipt;
  }
  // totalItems: number;
  message: string;
  
  handleReceiptChange(receipt:Receipt) {
    this.receipt = receipt;
  }
  
  ngOnInit() {
    this.receipt = this.receiptService.receipt;
  }
  constructor(private receiptService: ReceiptService) {}
}
