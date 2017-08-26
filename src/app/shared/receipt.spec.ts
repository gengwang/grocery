import { Entry, Receipt } from './receipt';

describe('Receipt', () => {
  it('should create an instance', () => {
    expect(new Receipt()).toBeTruthy();
  });

  it('should get correct total price', () => {
    let hotDog = new Entry("hot dog", 1.2, 2);
    let eggs = new Entry("eggs", 2.36, 1);
    let receipt = new Receipt( [hotDog, eggs] );
    expect(receipt.totalPrice).toEqual(4.76);

    let milk = new Entry("milk", 3.5, 1);
    receipt.addEntry(milk);
    expect(receipt.totalItems).toEqual(3);
    expect(receipt.totalPrice).toEqual(8.26);
  })
});
