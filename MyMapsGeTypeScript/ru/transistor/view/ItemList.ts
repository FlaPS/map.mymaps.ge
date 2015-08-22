/// <reference path="../model/ItemVO.ts" />

@component("item-list")
class ItemList extends polymer.Base implements polymer.Element {

    public static ADD_TRIGGERED     : string = 'addTriggered';
    public static REMOVE_TRIGGERED  : string = 'removeTriggered';
    public static UPDATE_TRIGGERED  : string = 'updateTriggered';




    public onAddTriggered(): void {

        this.selectedItem = new ItemVO();
        this.selectedItem.name = this.name;
        this.selectedItem.quantity = this.quantity;
        this.selectedItem.price = this.price;
        this.name       = "";
        this.quantity   = null;
        this.price      = null;
        this.fire(ItemList.ADD_TRIGGERED, this.selectedItem);
        setTimeout(this.scrollToBottom, 200);
    }
    private scrollToBottom(): void
    {
        window.scrollTo(0, document.body.scrollHeight);
    }

    public onUpdateTriggered(): void {
        this.checkSelect()
  
        var index = this.dataProvider.indexOf(this.selectedItem)
        this.set('dataProvider.' + index + '.name', this.uname);
        this.set('dataProvider.' + index + '.sum', this.uprice * this.uquantity);
        this.set('dataProvider.' + index + '.price', this.uprice);
        this.set('dataProvider.' + index + '.quantity', this.uquantity);
        this.fire(ItemList.UPDATE_TRIGGERED, this.selectedItem);
        
    }

    public onRemoveTriggered(): void {
        this.checkSelect();
        this.splice('dataProvider', this.dataProvider.indexOf(this.selectedItem), 1);
        this.fire(ItemList.REMOVE_TRIGGERED, this.selectedItem);
    }


    @property({type: Array, value: [], notify: true, reflectToAttribute: true})
    public dataProvider: Array<any> = []


    @property({ type: String, notify: true, reflectToAttribute: true })
    public name: string;
    @property({ type: Number, notify: true, reflectToAttribute: true })
    public quantity: number;
    @property({ type: Number, notify: true, reflectToAttribute: true })
    public price: number;
    @property({ type: Boolean, value: false, notify: true, reflectToAttribute: true })
    public newEnabled: boolean = false;



    @property({ type: String, notify: true, reflectToAttribute: true })
    public uname: string;
    @property({ type: Number, notify: true, reflectToAttribute: true })
    public uquantity: number;
    @property({ type: Number, notify: true, reflectToAttribute: true })
    public uprice: number;
    @property({ type: Number, notify: true, reflectToAttribute: true })
    public usum: number;
    @property({ type: Boolean, value: false, notify: true, reflectToAttribute: true })
    public editEnabled: boolean = false;
    @observe("uprice,uquantity")
    updateSumChanged(newUprice,newUquantity) {
        this.usum = newUprice* newUquantity;
    }

    









    @property({ type: Boolean, value: false, notify: true, reflectToAttribute: true })
    public editMode: boolean = false;
  
    public selectedItem: ItemVO;

    public onSelect(e, detail, sender): void {
        var item: ItemVO = e.model.item;
        this.selectedItem = item;
        console.log("Clicked " + item);
        this.uprice     = item.price;
        this.uquantity  = item.quantity;
        this.uname      = item.name;
        this.editMode = true;
        this.$.mouseCatcher.style.display = 'block';
        this.$.mouseCatcher.addEventListener("click", this.checkSelect.bind(this));
    }

    private checkSelect(e: MouseEvent =null): void {
        this.editMode = false;
        this.$.mouseCatcher.style.display = 'none';
    }


    









    @observe("price,quantity,name")
    addValidate(price, quantity, name)
    {
                    var endPrice    : string = String(price).slice(-1);
                    var endQuantity: string = String(quantity).slice(-1)


                    if (endPrice == "." || endQuantity == ".") {
                        this.newEnabled = false;
                        return;
                    }


                    if (this.price > 0 && Math.floor(this.price) != this.price)
                                                                this.price = Math.floor(this.price * 100) / 100;
                    if (this.quantity > 0 && Math.floor(this.quantity) != this.quantity)
                                                                this.quantity = Math.floor(this.quantity * 1000) / 1000;
                    
                    this.newEnabled = Boolean(Number(price) > 0 && name.length > 2 && Number(quantity) > 0 && price < 999999 && quantity < 999);
    }



    @observe("uprice,uquantity,uname")
    editValidate(price, quantity, name)
    {

                    var endPrice    : string = String(price).slice(-1);
                    var endQuantity : string = String(quantity).slice(-1)


                    if (    endPrice == "." ||
                            endQuantity == ".")
                    {
                                                        this.editEnabled = false;
                                                        return
                    }

                    if (price > 0 && Math.floor(price) != price)
                                                                    this.uprice = Math.floor(price * 100) / 100;
                    if (quantity > 0 && Math.floor(quantity) != quantity)
                                                                    this.uquantity = Math.floor(quantity * 1000) / 1000;

                    this.editEnabled = Boolean(Number(price) > 0 && name.length > 2 && Number(quantity) > 0 && price < 999999 && quantity < 999); 
    }





    public getItemIndexById(id:number):number{
        var index: number = -1;
        for (var i = 0; i < this.dataProvider.length; i++)
        {
            if (this.dataProvider[i].id == id)
            {
                index = i;
                break;
            }
        }
        return index;
    }
}

ItemList.register(); 