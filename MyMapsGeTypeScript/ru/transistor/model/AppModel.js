var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="ItemVO.ts" />
/// <reference path="ProfileVO.ts" />
/// <reference path="../../../ru/flaps/events/EventDispatcher.ts" />
/// <reference path="../../../Scripts/typings/jquery/jquery.d.ts" />
var AppModel = (function (_super) {
    __extends(AppModel, _super);
    function AppModel(gateway) {
        if (gateway === void 0) { gateway = "http://transistorTest:8091/JSONGateway.php"; }
        _super.call(this);
        this.gateway = gateway;
        this._authKey = '';
        this.items = [];
    }
    Object.defineProperty(AppModel.prototype, "authKey", {
        get: function () {
            return this._authKey;
        },
        enumerable: true,
        configurable: true
    });
    AppModel.prototype.signIn = function (login, password) {
        var req = new RequestVO('ProfileService', 'login', [login, password]);
        this.request(req, this.signInResult);
    };
    AppModel.prototype.signUp = function (login, password, confirm) {
        var req = new RequestVO('ProfileService', 'register', [login, password, confirm]);
        this.request(req, this.signInResult);
    };
    AppModel.prototype.signInResult = function (data) {
        var result = this.extractResult(data);
        if (result) {
            this._authKey = data.result;
            this.dispatchEventWith(AppModel.LOGIN_SUCCESS);
        }
        else {
            this.dispatchEventWith(AppModel.LOGIN_ERROR);
        }
    };
    AppModel.prototype.addItem = function (item) {
        var req = new RequestVO('ItemService', 'addItem', [this.authKey, item]);
        this.request(req, this.addItemResult);
    };
    AppModel.prototype.addItemResult = function (data) {
        var result = this.extractResult(data);
        if (result) {
            console.log(data.result);
            var item = data.result;
            item.sum = item.price * item.quantity;
            this.items.push(item);
            this.dispatchEventWith(AppModel.ITEM_ADDED, item);
        }
    };
    AppModel.prototype.removeItem = function (item) {
        var req = new RequestVO('ItemService', 'removeItemById', [this.authKey, item.id]);
        this.request(req, this.removeItemResult);
    };
    AppModel.prototype.removeItemResult = function (data) {
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
    AppModel.prototype.updateItem = function (item) {
        var req = new RequestVO('ItemService', 'updateItem', [this.authKey, item]);
        this.request(req, this.updateItemResult);
    };
    AppModel.prototype.updateItemResult = function (data) {
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
    AppModel.prototype.requestItems = function () {
        var req = new RequestVO('ItemService', 'getAllItemsByAuthKey', [this.authKey]);
        this.request(req, this.requestItemsResult);
    };
    AppModel.prototype.requestItemsResult = function (data) {
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
    AppModel.prototype.extractResult = function (data) {
        data._explicitType = 'ResponseVO';
        data = ObjectVO.mapRawObject(data);
        console.log("raw result :" + JSON.stringify(data));
        if (data.result instanceof ErrorVO) {
            window.alert("Error code " + data.result.code + ': ' + data.result.description + '\n ' + data.result.details);
            return null;
        }
        return data.result;
    };
    AppModel.prototype.request = function (requestObj, JQsuccessHandler, JQfaultHandler) {
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
    AppModel.prototype.defaultAjaxSuccess = function (data) {
        window.alert('Success request ' + data);
    };
    AppModel.prototype.defaultAjaxError = function (data) {
        window.alert('Could not coect gateway ' + this.gateway);
    };
    /**
     * Login success
     */
    AppModel.LOGIN_SUCCESS = 'loginSuccess';
    /**
     * Login success
     */
    AppModel.REGISTER_SUCCESS = 'registerSuccess';
    /**
     * Login Error
     */
    AppModel.LOGIN_ERROR = 'loginError';
    /**
     * Login success
     */
    AppModel.LOGOUT = 'logout';
    /**
     * Login success
     */
    AppModel.DATA_LOADED = 'dataChanged';
    /**
     * Login success
     */
    AppModel.ITEM_ADDED = 'dataAdded';
    /**
    * Login success
    */
    AppModel.ITEM_UPDATED = 'dataUpdated';
    /**
    * Login success
    */
    AppModel.ITEM_REMOVED = 'dataRemoved';
    /**
     * Wrong authKey token
     */
    AppModel.AUTH_ERROR = 'authError';
    AppModel.ERROR = 'error';
    AppModel.CONNECTION_ERROR = 'coectionError';
    AppModel.SAVE_SUCCESS = 'saveSuccess';
    AppModel.DATA_UPDATE = 'dataUpdate';
    return AppModel;
})(ru.flaps.events.EventDispatcher);
//# sourceMappingURL=AppModel.js.map