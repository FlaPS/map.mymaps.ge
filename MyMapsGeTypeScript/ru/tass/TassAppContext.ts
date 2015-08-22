/// <reference path="../../ru/flaps/events/EventDispatcher.ts" />

/// <reference path="../../ru/tass/view/CarouselList.ts" />
/// <reference path="../../ru/tass/data/TassAppModel.ts" />
/// <reference path="../../ru/tass/data/CarouselVO.ts" />
/// <reference path="../../ru/tass/data/TypeVO.ts" />
/**
 * In this small case current context implement some controller funtions for model and view
 */
class TassAppContext {
    public static GATEWAY: string = 'http://tassTestShammasov:8091/backend/JSONGateway.php';



    private _model: TassAppModel;
    public list: any;

    public constructor()
    {
 

        ObjectVO.registerAlias('ObjectVO', ObjectVO);
        ObjectVO.registerAlias('ErrorVO', ErrorVO);
        ObjectVO.registerAlias('RequestVO', RequestVO);
        ObjectVO.registerAlias('ResponseVO', ResponseVO);

        ObjectVO.registerAlias('CarouselVO', CarouselVO);
        ObjectVO.registerAlias('TypeVO', TypeVO);


        this._model = new TassAppModel(TassAppContext.GATEWAY);
        this._model.requestTypes();
        console.log('init context');
        this._model.addEventListener(TassAppModel.CAROUSELS_LOADED, this.crouselsLoadedHandler.bind(this));
   
    }

  



    private crouselsLoadedHandler(): void
    {
      
        this.list = CarouselList.create();
        window.document.body.appendChild(this.list);
        console.log('data loaded for' + this.list);
        this.list.style.display = 'block';
        this.list.typesProvider = this._model.types;
        this.list.dataProvider = this._model.carousels;

    }
}