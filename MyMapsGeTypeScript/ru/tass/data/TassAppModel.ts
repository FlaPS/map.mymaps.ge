
class TassAppModel extends ru.flaps.events.EventDispatcher
{
    /**
     * Login success
     */
    public static TYPES_LOADED: string = 'typesLoaded';

    /**
     * Carousels loaded
     */
    public static CAROUSELS_LOADED: string = 'carouselsLoaded';


    /**
     * Some ErrorVO was accured on the backend reagarding to you reqeust
     */

    public static ERROR: string = 'error';

    /**
     * Backend is unavailable
     */
    public static CONNECTION_ERROR  : string    = 'coectionError';

    public static TYPES_GATEWAY     : string = 'http://AS3.ru/tass/types.php';
    public static CAROUSELS_GATEWAY : string = 'http://AS3.ru/tass/carousels.php';

    constructor(public gateway:string = "http://tassTestShammasov:8091/backend/JSONGateway.php")
    {
        super();

   


    }

    
    public seedMockData(): void {


        this.types.push(    new TypeVO(1, "Водные"),
                            new TypeVO(2, "Карусель"),
                            new TypeVO(3, "Высотные"),
                            new TypeVO(4, "Горки"));
    }


 


 
    private _carousels: Array<CarouselVO>;
    public get carousels(): Array<CarouselVO> {
        return this._carousels
    }

    private _types: Array<TypeVO> = new Array<TypeVO>();
    public get types(): Array<TypeVO> {
        return this._types
    }








    public requestTypes():void
    {
        var req: RequestVO = new RequestVO( 'TassService',
                                            'getAllTypes');
        this.requestPost(req, this.requestItemsResult, this.defaultAjaxError, TassAppModel.TYPES_GATEWAY);
    }






    private requestItemsResult(data: Array<any>): void {

        var result: Array<TypeVO> = new Array<TypeVO>();
        var index: number = 0;
        var item: any;
        while (index < data.length) {
            item = data[index];
            result.push(new TypeVO(-1, item.name));
            index++;
        }
            this._types = result;
            this.dispatchEventWith(TassAppModel.TYPES_LOADED);
        
        this.requestAllCarousels();
    }

    public requestAllCarousels(): void {
        var req: RequestVO = new RequestVO('TassService',
            'getAllCarousels');
        this.requestPost(req, this.requestCarouselsResult, this.defaultAjaxError, TassAppModel.CAROUSELS_GATEWAY);
    }


    private requestCarouselsResult(data:Array<any>): void {

        var result: Array<CarouselVO> = new Array<CarouselVO>();
        var index: number = 0;
        var item: any;
        while (index < data.length) {
            item = data[index];
            result.push(new CarouselVO(-1,item.name, item.age, item.hasPhoto, item.hasVideo, item.desc, item.pic, item.price, item.intensity, item.types));
            index++;
        }
            console.log(data);
            this._carousels = result;
            this.dispatchEventWith(TassAppModel.CAROUSELS_LOADED);
        
     
    }



    /**
     * Extract responce and handle errors in case of.
     * @rerutrn Mapped raw result or null in case of ErrorVOs
     */
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


    /**
     * Request data via POST method
     */

    private requestPost(requestObj: RequestVO,
                    JQsuccessHandler: Function = this.defaultAjaxSuccess,
                    JQfaultHandler: Function = this.defaultAjaxError, urlPath:string = this.gateway): void
    {
        var settings: JQueryAjaxSettings = {
            url: urlPath,
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
        window.alert('Could not connect gateway '+this.gateway);
    }

}


