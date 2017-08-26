import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Entry, Receipt } from "../shared/receipt";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-receipt-details',
  templateUrl: './receipt-details.component.html',
  styleUrls: ['./receipt-details.component.scss'],
  animations: [
    trigger('trans', [
      state('in', style({transform: 'translateY(0)', opacity: 1})),
      transition('void => *', [
        style({transform: 'translateY(-100%)', opacity: 0}),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({transform: 'translateY(100%)', opacity: 1}))
      ])
    ])
  ]
})
export class ReceiptDetailsComponent implements OnInit {
  @Input() receipt: Receipt;
  @Output() onReceiptChange = new EventEmitter<Receipt>();
  entries: Entry[];
  formattedQuantity():string {
    return "kkk";
  }

  removeEntry(entry:Entry) {
    let index = this.entries.indexOf(entry, 0);
    if(index > -1) {
      this.entries.splice(index, 1);
      this.onReceiptChange.emit(this.receipt);
    }
  }
  addEntry() {
    let entry = new Entry("untitled");
    this.entries.push(entry);
    this.onReceiptChange.emit(this.receipt);
  }

  constructor() { }

  ngOnInit() {
    this.entries = this.receipt.entries;
  }

}
