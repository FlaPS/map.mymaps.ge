/// <reference path="ItemVO.ts" />
/// <reference path="ProfileVO.ts" />
/// <reference path="../../../ru/flaps/events/EventDispatcher.ts" />
/// <reference path="../../../Scripts/typings/jquery/jquery.d.ts" />
class AppModel extends  ru.flaps.events.EventDispatcher
{
    /**
     * Login success
     */
    public static LOGIN_SUCCESS: string = 'loginSuccess';

    /**
     * Login success
     */
    public static REGISTER_SUCCESS: string = 'registerSuccess';

    /**
     * Login Error
     */
    public static LOGIN_ERROR       : string = 'loginError';
    
    /**
     * Login success
     */
    public static LOGOUT            : string = 'logout';

    /**
     * Login success
     */
    public static DATA_LOADED: string = 'dataChanged';

    /**
     * Login success
     */
    public static ITEM_ADDED: string = 'dataAdded';

    /**
    * Login success
    */
    public static ITEM_UPDATED: string = 'dataUpdated';

    /**
    * Login success
    */
    public static ITEM_REMOVED: string = 'dataRemoved';

    /**
     * Wrong authKey token
     */
    public static AUTH_ERROR        : string    = 'authError'   ;
    public static ERROR             : string    = 'error';
    public static CONNECTION_ERROR  : string    = 'coectionError';
    public static SAVE_SUCCESS      : string    = 'saveSuccess' ;
    public static DATA_UPDATE       : string    = 'dataUpdate'  ;

    constructor(public gateway:string = "http://transistorTest:8091/JSONGateway.php")
    {
        super();
       
    }






    private _authKey: string = '';

    public get authKey(): string
    {
        return this._authKey
    }

    public signIn(login: string, password: string): void
    {
        var req: RequestVO = new RequestVO('ProfileService', 'login', [login, password]);   
        this.request(req, this.signInResult);
    }

    public signUp(login: string, password: string, confirm: string): void {
        var req: RequestVO = new RequestVO('ProfileService', 'register', [login, password, confirm]);
        this.request(req, this.signInResult);
    }
    private  signInResult(data:ResponseVO):void
    {
       
        var result = this.extractResult(data);
        if (result)
        {
            
            this._authKey = data.result;
            this.dispatchEventWith(AppModel.LOGIN_SUCCESS);
        }
        else
        {
            this.dispatchEventWith(AppModel.LOGIN_ERROR);
        }
    }




 


    public items: Array<ItemVO> = [];












    public addItem(item: ItemVO): void {
        var req: RequestVO = new RequestVO('ItemService', 'addItem', [this.authKey, item]);
        this.request(req, this.addItemResult);
    }

    private addItemResult(data: ResponseVO): void {
        var result = this.extractResult(data);
        if (result) {
            console.log(data.result);
            var item: ItemVO = <ItemVO>data.result;
            item.sum = item.price * item.quantity;
            this.items.push(item);
  
            this.dispatchEventWith(AppModel.ITEM_ADDED, item);
        }
    }









    public removeItem(item: ItemVO): void {
        var req: RequestVO = new RequestVO('ItemService', 'removeItemById', [this.authKey, item.id]);
        this.request(req, this.removeItemResult);
    }

    private removeItemResult(data: ResponseVO): void {
        var result = this.extractResult(data);
        if (result) {
            console.log(data.result);

            for (var i = 0; i < this.items.length; i++) {
                if (this.items[i].id == result.id) {
                    this.items.splice(i, 1);
                    break;
                }
            }
      
            this.dispatchEventWith(AppModel.ITEM_REMOVED, <ItemVO>data.result);
        }
    }










    public updateItem(item: ItemVO): void
    {
        var req: RequestVO = new RequestVO('ItemService', 'updateItem',[this.authKey, item]);
        this.request(req, this.updateItemResult);
    }

    private updateItemResult(data: ResponseVO): void {
        var result = this.extractResult(data);
        if (result)
        {
            console.log(data.result);
            for (var i = 0; i < this.items.length; i++) {
                if (this.items[i].id == result.id)
                {
                    this.items[i] = result;
                    var item: ItemVO = this.items[i];
                    item.sum = item.price * item.quantity;
                    break;
                }
            }
      
            this.dispatchEventWith(AppModel.ITEM_UPDATED, <ItemVO>data.result);
        }
    }







    public requestItems():void
    {
        var req: RequestVO = new RequestVO( 'ItemService',
                                            'getAllItemsByAuthKey',
                                            [this.authKey]);
        this.request(req, this.requestItemsResult);
    }

    private requestItemsResult(data: ResponseVO): void {

        var result = this.extractResult(data);
        if (result) {
            console.log(data.result);
            this.items = <Array<ItemVO>>result;
            for (var i in this.items) {
                this.items[i].sum = this.items[i].price * this.items[i].quantity;
            }
            this.dispatchEventWith(AppModel.DATA_LOADED);
        }
    }






    private extractResult(data: ResponseVO): any
    {
        
        data._explicitType = 'ResponseVO';
        data = ObjectVO.mapRawObject(data);
        console.log("raw result :" + JSON.stringify(data));
        if (data.result instanceof ErrorVO) {
            window.alert("Error code " + data.result.code + ': ' + data.result.description + '\n ' + data.result.details);
            return null;
        }
        return data.result;
    }


    private request(requestObj: RequestVO,
                    JQsuccessHandler: Function = this.defaultAjaxSuccess,
                    JQfaultHandler: Function = this.defaultAjaxError): void
    {
        var settings: JQueryAjaxSettings = {
            url: this.gateway,
            type: 'POST',
            dataType: 'json',
            data: { request: JSON.stringify(requestObj) },
            success: JQsuccessHandler.bind(this),
            error: JQfaultHandler.bind(this)

        }
        console.log('sending request ' +requestObj.toString());
        $.ajax(settings);
    }

    private defaultAjaxSuccess(data:any):void
    {
        window.alert('Success request ' + data);
    }
    private defaultAjaxError(data: any): void
    {
        window.alert('Could not coect gateway '+this.gateway);
    }

}


