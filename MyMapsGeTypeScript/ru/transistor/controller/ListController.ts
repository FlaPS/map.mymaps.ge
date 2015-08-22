class ListController extends BaseController {


    public setUp(view: any, model: AppModel):void
    {
        super.setUp(view, model);
        
        this.model.addEventListener(AppModel.LOGIN_SUCCESS  , this.start.bind(this));
        this.model.addEventListener(AppModel.LOGOUT, this.stop.bind(this));

    
    }

    public start(): void
    {
        super.start();

        this.view.style.display = 'block';

        this.view.addEventListener(ItemList.ADD_TRIGGERED,      this.addHandler.bind(this));
        this.view.addEventListener(ItemList.REMOVE_TRIGGERED,   this.removeHandler.bind(this));
        this.view.addEventListener(ItemList.UPDATE_TRIGGERED,   this.updateHandler.bind(this));
        this.model.addEventListener(AppModel.DATA_LOADED,       this.dataLoaded.bind(this));
        this.model.addEventListener(AppModel.ITEM_ADDED,        this.itemAdded.bind(this));
        this.model.addEventListener(AppModel.ITEM_UPDATED,      this.itemUpdated.bind(this));
        this.model.addEventListener(AppModel.ITEM_REMOVED,      this.itemRemoved.bind(this));
        this.model.requestItems();
    }
    private addHandler(e: CustomEvent): void {
        this.model.addItem(e.detail);
    }
    private removeHandler(e: CustomEvent): void {
        this.model.removeItem(e.detail);
    }
    private updateHandler(e: CustomEvent): void {
        this.model.updateItem(e.detail);
    }
    public stop(): void
    {
        this.view.style.display = 'none';

        this.view.removeEventListener(ItemList.ADD_TRIGGERED, this.model.addItem.bind(this.model));
        this.view.removeEventListener(ItemList.REMOVE_TRIGGERED, this.model.removeItem.bind(this.model));
        this.view.removeEventListener(ItemList.UPDATE_TRIGGERED, this.model.updateItem.bind(this.model));
        this.model.removeEventListener(AppModel.DATA_LOADED, this.dataLoaded.bind(this));
       
    }


   


    private dataLoaded(): void {
        //Bindings are incapsulated
 
       this.view.dataProvider = this.context.model.items;
 
  
    }











    private itemAdded(item:ItemVO): void
    {

        this.view.push("dataProvider", item);
        var index: number = this.view.getIndexById(item.id);
   
    }


    private itemRemoved(item: ItemVO): void {
        var index: number = this.view.getIndexById(item.id);
        this.view.splice('dataProvider',index, 1);
    }


    private itemUpdated(item:ItemVO):void
    {
        var index: number = this.view.getItemIndexById(item.id);
        this.view.set('dataProvider.' + index, item);
        this.view.set('dataProvider.' + index + '.sum', item.sum);
        this.view.set('dataProvider.' + index + '.name', item.name);
        this.view.set('dataProvider.' + index + '.price', item.price);
        this.view.set('dataProvider.' + index + '.quantity', item.quantity);
    }
  
} 

        
    












 