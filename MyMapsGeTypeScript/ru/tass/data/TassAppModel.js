var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TassAppModel = (function (_super) {
    __extends(TassAppModel, _super);
    function TassAppModel(gateway) {
        if (gateway === void 0) { gateway = "http://tassTestShammasov:8091/backend/JSONGateway.php"; }
        _super.call(this);
        this.gateway = gateway;
        this._types = new Array();
    }
    TassAppModel.prototype.seedMockData = function () {
        this.types.push(new TypeVO(1, "Водные"), new TypeVO(2, "Карусель"), new TypeVO(3, "Высотные"), new TypeVO(4, "Горки"));
    };
    Object.defineProperty(TassAppModel.prototype, "carousels", {
        get: function () {
            return this._carousels;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TassAppModel.prototype, "types", {
        get: function () {
            return this._types;
        },
        enumerable: true,
        configurable: true
    });
    TassAppModel.prototype.requestTypes = function () {
        var req = new RequestVO('TassService', 'getAllTypes');
        this.requestPost(req, this.requestItemsResult, this.defaultAjaxError, TassAppModel.TYPES_GATEWAY);
    };
    TassAppModel.prototype.requestItemsResult = function (data) {
        var result = new Array();
        var index = 0;
        var item;
        while (index < data.length) {
            item = data[index];
            result.push(new TypeVO(-1, item.name));
            index++;
        }
        this._types = result;
        this.dispatchEventWith(TassAppModel.TYPES_LOADED);
        this.requestAllCarousels();
    };
    TassAppModel.prototype.requestAllCarousels = function () {
        var req = new RequestVO('TassService', 'getAllCarousels');
        this.requestPost(req, this.requestCarouselsResult, this.defaultAjaxError, TassAppModel.CAROUSELS_GATEWAY);
    };
    TassAppModel.prototype.requestCarouselsResult = function (data) {
        var result = new Array();
        var index = 0;
        var item;
        while (index < data.length) {
            item = data[index];
            result.push(new CarouselVO(-1, item.name, item.age, item.hasPhoto, item.hasVideo, item.desc, item.pic, item.price, item.intensity, item.types));
            index++;
        }
        console.log(data);
        this._carousels = result;
        this.dispatchEventWith(TassAppModel.CAROUSELS_LOADED);
    };
    /**
     * Extract responce and handle errors in case of.
     * @rerutrn Mapped raw result or null in case of ErrorVOs
     */
    TassAppModel.prototype.extractResult = function (data) {
        data._explicitType = 'ResponseVO';
        data = ObjectVO.mapRawObject(data);
        console.log("raw result :" + JSON.stringify(data));
        if (data.result instanceof ErrorVO) {
            window.alert("Error code " + data.result.code + ': ' + data.result.description + '\n ' + data.result.details);
            return null;
        }
        return data.result;
    };
    /**
     * Request data via POST method
     */
    TassAppModel.prototype.requestPost = function (requestObj, JQsuccessHandler, JQfaultHandler, urlPath) {
        if (JQsuccessHandler === void 0) { JQsuccessHandler = this.defaultAjaxSuccess; }
        if (JQfaultHandler === void 0) { JQfaultHandler = this.defaultAjaxError; }
        if (urlPath === void 0) { urlPath = this.gateway; }
        var settings = {
            url: urlPath,
            type: 'POST',
            dataType: 'json',
            data: { request: JSON.stringify(requestObj) },
            success: JQsuccessHandler.bind(this),
            error: JQfaultHandler.bind(this)
        };
        console.log('sending request ' + requestObj.toString());
        $.ajax(settings);
    };
    TassAppModel.prototype.defaultAjaxSuccess = function (data) {
        window.alert('Success request ' + data);
    };
    TassAppModel.prototype.defaultAjaxError = function (data) {
        window.alert('Could not connect gateway ' + this.gateway);
    };
    /**
     * Login success
     */
    TassAppModel.TYPES_LOADED = 'typesLoaded';
    /**
     * Carousels loaded
     */
    TassAppModel.CAROUSELS_LOADED = 'carouselsLoaded';
    /**
     * Some ErrorVO was accured on the backend reagarding to you reqeust
     */
    TassAppModel.ERROR = 'error';
    /**
     * Backend is unavailable
     */
    TassAppModel.CONNECTION_ERROR = 'coectionError';
    TassAppModel.TYPES_GATEWAY = 'http://AS3.ru/tass/types.php';
    TassAppModel.CAROUSELS_GATEWAY = 'http://AS3.ru/tass/carousels.php';
    return TassAppModel;
})(ru.flaps.events.EventDispatcher);
//# sourceMappingURL=TassAppModel.js.map