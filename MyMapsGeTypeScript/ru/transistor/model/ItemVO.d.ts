declare class ItemVO extends ObjectVO {
    constructor(name?: string, quantity?: number, price?: number);
    name: string;
    quantity: number;
    price: number;
    sum: number;
}
