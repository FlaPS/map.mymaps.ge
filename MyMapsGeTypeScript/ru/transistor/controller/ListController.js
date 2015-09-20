var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ListController = (function (_super) {
    __extends(ListController, _super);
    function ListController() {
        _super.apply(this, arguments);
    }
    ListController.prototype.setUp = function (view, model) {
        _super.prototype.setUp.call(this, view, model);
        this.model.addEventListener(AppModel.LOGIN_SUCCESS, this.start.bind(this));
        this.model.addEventListener(AppModel.LOGOUT, this.stop.bind(this));
    };
    ListController.prototype.start = function () {
        _super.prototype.start.call(this);
        this.view.style.display = 'block';
        this.view.addEventListener(ItemList.ADD_TRIGGERED, this.addHandler.bind(this));
        this.view.addEventListener(ItemList.REMOVE_TRIGGERED, this.removeHandler.bind(this));
        this.view.addEventListener(ItemList.UPDATE_TRIGGERED, this.updateHandler.bind(this));
        this.model.addEventListener(AppModel.DATA_LOADED, this.dataLoaded.bind(this));
        this.model.addEventListener(AppModel.ITEM_ADDED, this.itemAdded.bind(this));
        this.model.addEventListener(AppModel.ITEM_UPDATED, this.itemUpdated.bind(this));
        this.model.addEventListener(AppModel.ITEM_REMOVED, this.itemRemoved.bind(this));
        this.model.requestItems();
    };
    ListController.prototype.addHandler = function (e) {
        this.model.addItem(e.detail);
    };
    ListController.prototype.removeHandler = function (e) {
        this.model.removeItem(e.detail);
    };
    ListController.prototype.updateHandler = function (e) {
        this.model.updateItem(e.detail);
    };
    ListController.prototype.stop = function () {
        this.view.style.display = 'none';
        this.view.removeEventListener(ItemList.ADD_TRIGGERED, this.model.addItem.bind(this.model));
        this.view.removeEventListener(ItemList.REMOVE_TRIGGERED, this.model.removeItem.bind(this.model));
        this.view.removeEventListener(ItemList.UPDATE_TRIGGERED, this.model.updateItem.bind(this.model));
        this.model.removeEventListener(AppModel.DATA_LOADED, this.dataLoaded.bind(this));
    };
    ListController.prototype.dataLoaded = function () {
        //Bindings are incapsulated
        this.view.dataProvider = this.context.model.items;
    };
    ListController.prototype.itemAdded = function (item) {
        this.view.push("dataProvider", item);
        var index = this.view.getIndexById(item.id);
    };
    ListController.prototype.itemRemoved = function (item) {
        var index = this.view.getIndexById(item.id);
        this.view.splice('dataProvider', index, 1);
    };
    ListController.prototype.itemUpdated = function (item) {
        var index = this.view.getItemIndexById(item.id);
        this.view.set('dataProvider.' + index, item);
        this.view.set('dataProvider.' + index + '.sum', item.sum);
        this.view.set('dataProvider.' + index + '.name', item.name);
        this.view.set('dataProvider.' + index + '.price', item.price);
        this.view.set('dataProvider.' + index + '.quantity', item.quantity);
    };
    return ListController;
})(BaseController);
//# sourceMappingURL=ListController.js.map