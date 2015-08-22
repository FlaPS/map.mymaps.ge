class TypeVO extends ObjectVO
{
    constructor(id: number = -1,
                public name: string = "Новый тип") {
        super();
        this.id = id;
        this._explicitType = 'TypeVO';
    }
    public active: boolean = true;

    
}