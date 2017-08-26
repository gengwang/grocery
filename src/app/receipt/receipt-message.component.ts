import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-receipt-message',
  templateUrl: './receipt-message.component.html',
  styleUrls: ['./receipt-message.component.scss']
})
export class ReceiptMessageComponent implements OnInit {
  @Input() message: string;
  constructor() { }

  ngOnInit() {
  }

}
