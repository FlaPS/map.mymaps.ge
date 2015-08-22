
class ItemVO extends ObjectVO
{
    constructor(name:string = '', quantity:number = 0, price:number = 0)
    {
        super()
        this._explicitType = 'ItemVO';
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }

    public name     :   string = '';
    public quantity :   number = 0;
    public price    :   number = 0;

    public sum      :   number;
   // hook for Data Bingind - Polymer could not use getters
   /* set sum(value: string) { }
    get sum(): string
    {
            return (this.quantity * this.price).toFixed(2);
    }*/
} 