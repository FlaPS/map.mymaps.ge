var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TassAppModel = (function (_super) {
    __extends(TassAppModel, _super);
    function TassAppModel(gateway, ioLib) {
        if (gateway === void 0) { gateway = "http://transistorTest:8091/JSONGateway.php"; }
        if (ioLib === void 0) { ioLib = null; }
        _super.call(this);
        this.gateway = gateway;
        this._authKey = '';
        this.items = [];
    }
    Object.defineProperty(TassAppModel.prototype, "authKey", {
        get: function () {
            return this._authKey;
        },
        enumerable: true,
        configurable: true
    });
    TassAppModel.prototype.signIn = function (login, password) {
        var req = new RequestVO('ProfileService', 'login', [login, password]);
        this.request(req, this.signInResult);
    };
    TassAppModel.prototype.signUp = function (login, password, confirm) {
        var req = new RequestVO('ProfileService', 'register', [login, password, confirm]);
        this.request(req, this.signInResult);
    };
    TassAppModel.prototype.signInResult = function (data) {
        var result = this.extractResult(data);
        if (result) {
            this._authKey = data.result;
            this.dispatchEventWith(AppModel.LOGIN_SUCCESS);
        }
        else {
            this.dispatchEventWith(AppModel.LOGIN_ERROR);
        }
    };
    TassAppModel.prototype.addItem = function (item) {
        var req = new RequestVO('ItemService', 'addItem', [this.authKey, item]);
        this.request(req, this.addItemResult);
    };
    TassAppModel.prototype.addItemResult = function (data) {
        var result = this.extractResult(data);
        if (result) {
            console.log(data.result);
            var item = data.result;
            item.sum = item.price * item.quantity;
            this.items.push(item);
            this.dispatchEventWith(AppModel.ITEM_ADDED, item);
        }
    };
    TassAppModel.prototype.removeItem = function (item) {
        var req = new RequestVO('ItemService', 'removeItemById', [this.authKey, item.id]);
        this.request(req, this.removeItemResult);
    };
    TassAppModel.prototype.removeItemResult = function (data) {
        var result = this.extractResult(data);
        if (result) {
            console.log(data.result);
            for (var i = 0; i < this.items.length; i++) {
                if (this.items[i].id == result.id) {
                    this.items.splice(i, 1);
                    break;
                }
            }
            this.dispatchEventWith(AppModel.ITEM_REMOVED, data.result);
        }
    };
    TassAppModel.prototype.updateItem = function (item) {
        var req = new RequestVO('ItemService', 'updateItem', [this.authKey, item]);
        this.request(req, this.updateItemResult);
    };
    TassAppModel.prototype.updateItemResult = function (data) {
        var result = this.extractResult(data);
        if (result) {
            console.log(data.result);
            for (var i = 0; i < this.items.length; i++) {
                if (this.items[i].id == result.id) {
                    this.items[i] = result;
                    var item = this.items[i];
                    item.sum = item.price * item.quantity;
                    break;
                }
            }
            this.dispatchEventWith(AppModel.ITEM_UPDATED, data.result);
        }
    };
    TassAppModel.prototype.requestItems = function () {
        var req = new RequestVO('ItemService', 'getAllItemsByAuthKey', [this.authKey]);
        this.request(req, this.requestItemsResult);
    };
    TassAppModel.prototype.requestItemsResult = function (data) {
        var result = this.extractResult(data);
        if (result) {
            console.log(data.result);
            this.items = result;
            for (var i in this.items) {
                this.items[i].sum = this.items[i].price * this.items[i].quantity;
            }
            this.dispatchEventWith(AppModel.DATA_LOADED);
        }
    };
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
    TassAppModel.prototype.request = function (requestObj, JQsuccessHandler, JQfaultHandler) {
        if (JQsuccessHandler === void 0) { JQsuccessHandler = this.defaultAjaxSuccess; }
        if (JQfaultHandler === void 0) { JQfaultHandler = this.defaultAjaxError; }
        var settings = {
            url: this.gateway,
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
        window.alert('Could not coect gateway ' + this.gateway);
    };
    /**
     * Login success
     */
    TassAppModel.LOGIN_SUCCESS = 'loginSuccess';
    /**
     * Login success
     */
    TassAppModel.REGISTER_SUCCESS = 'registerSuccess';
    /**
     * Login Error
     */
    TassAppModel.LOGIN_ERROR = 'loginError';
    /**
     * Login success
     */
    TassAppModel.LOGOUT = 'logout';
    /**
     * Login success
     */
    TassAppModel.DATA_LOADED = 'dataChanged';
    /**
     * Login success
     */
    TassAppModel.ITEM_ADDED = 'dataAdded';
    /**
    * Login success
    */
    TassAppModel.ITEM_UPDATED = 'dataUpdated';
    /**
    * Login success
    */
    TassAppModel.ITEM_REMOVED = 'dataRemoved';
    /**
     * Wrong authKey token
     */
    TassAppModel.AUTH_ERROR = 'authError';
    TassAppModel.ERROR = 'error';
    TassAppModel.CONNECTION_ERROR = 'coectionError';
    TassAppModel.SAVE_SUCCESS = 'saveSuccess';
    TassAppModel.DATA_UPDATE = 'dataUpdate';
    return TassAppModel;
})(ru.flaps.events.EventDispatcher);
//# sourceMappingURL=TassAppModel.js.map