export class Entry {
    constructor(
        public name: string,
        public unitPrice: number = 0,
        public quantity: number = 1
    ){}
}
export class Receipt {
    private _totalPrice: number;
    get totalPrice(): number {
        this._totalPrice = this.entries.map((d)=>{
            return d.unitPrice * d.quantity;
        }).reduce( (pre, cur) => {
            return pre + cur;
        }, 0);
        return this._totalPrice;
    }
    get totalItems(): number {
        return this.entries.length;
    }
    addEntry(entry: Entry) {
        this.entries.push(entry);
    }
    constructor( public entries: Entry[] = [] ) {}
}