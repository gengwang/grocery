import { Component, OnInit, Input } from '@angular/core';
import { Receipt } from "../shared/receipt";

@Component({
  selector: 'app-receipt-summary',
  templateUrl: './receipt-summary.component.html',
  styleUrls: ['./receipt-summary.component.scss']
})
export class ReceiptSummaryComponent implements OnInit {
  @Input() receipt: Receipt;

  constructor() { }

  ngOnInit() {
  }

}
