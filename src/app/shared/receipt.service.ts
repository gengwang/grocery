import { Injectable } from '@angular/core';
import { Entry, Receipt, GroceryType } from "./receipt";

@Injectable()
export class ReceiptService{
  receipt: Receipt;
  constructor() {
    let bananas = new Entry("Bananas", 0.23, 7, GroceryType.Produce);
    let milk = new Entry("Low fat milk", 2.99, 1, GroceryType.Dairy);
    let eggs = new Entry("Large Grade A Eggs, 12 ct", 1.48, 2, GroceryType.Dairy);
    let cereal = new Entry("Kix Berry Berry Corn Cereal", 2.98, 3, GroceryType.Baking);
    let hotdog = new Entry("Hawaiian Hot Dog Buns, 8 ct", 2.50, 1, GroceryType.Meat);
    let grapes = new Entry("Grapes Seedless, 2 lbs Bag", 4.24, 2, GroceryType.Produce);
    let pepper = new Entry("Yellow Bell Pepper", 1.88, 3, GroceryType.Produce);
    let receipt = new Receipt( [bananas, milk, eggs, cereal, hotdog, grapes, pepper] );

    this.receipt = receipt;
   }

}
