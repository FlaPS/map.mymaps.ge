/// <reference path="../model/ItemVO.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ItemList = (function (_super) {
    __extends(ItemList, _super);
    function ItemList() {
        _super.apply(this, arguments);
        this.dataProvider = [];
        this.newEnabled = false;
        this.editEnabled = false;
        this.editMode = false;
    }
    ItemList.prototype.onAddTriggered = function () {
        this.selectedItem = new ItemVO();
        this.selectedItem.name = this.name;
        this.selectedItem.quantity = this.quantity;
        this.selectedItem.price = this.price;
        this.name = "";
        this.quantity = null;
        this.price = null;
        this.fire(ItemList.ADD_TRIGGERED, this.selectedItem);
        setTimeout(this.scrollToBottom, 200);
    };
    ItemList.prototype.scrollToBottom = function () {
        window.scrollTo(0, document.body.scrollHeight);
    };
    ItemList.prototype.onUpdateTriggered = function () {
        this.checkSelect();
        var index = this.dataProvider.indexOf(this.selectedItem);
        this.set('dataProvider.' + index + '.name', this.uname);
        this.set('dataProvider.' + index + '.sum', this.uprice * this.uquantity);
        this.set('dataProvider.' + index + '.price', this.uprice);
        this.set('dataProvider.' + index + '.quantity', this.uquantity);
        this.fire(ItemList.UPDATE_TRIGGERED, this.selectedItem);
    };
    ItemList.prototype.onRemoveTriggered = function () {
        this.checkSelect();
        this.splice('dataProvider', this.dataProvider.indexOf(this.selectedItem), 1);
        this.fire(ItemList.REMOVE_TRIGGERED, this.selectedItem);
    };
    ItemList.prototype.updateSumChanged = function (newUprice, newUquantity) {
        this.usum = newUprice * newUquantity;
    };
    ItemList.prototype.onSelect = function (e, detail, sender) {
        var item = e.model.item;
        this.selectedItem = item;
        console.log("Clicked " + item);
        this.uprice = item.price;
        this.uquantity = item.quantity;
        this.uname = item.name;
        this.editMode = true;
        this.$.mouseCatcher.style.display = 'block';
        this.$.mouseCatcher.addEventListener("click", this.checkSelect.bind(this));
    };
    ItemList.prototype.checkSelect = function (e) {
        if (e === void 0) { e = null; }
        this.editMode = false;
        this.$.mouseCatcher.style.display = 'none';
    };
    ItemList.prototype.addValidate = function (price, quantity, name) {
        var endPrice = String(price).slice(-1);
        var endQuantity = String(quantity).slice(-1);
        if (endPrice == "." || endQuantity == ".") {
            this.newEnabled = false;
            return;
        }
        if (this.price > 0 && Math.floor(this.price) != this.price)
            this.price = Math.floor(this.price * 100) / 100;
        if (this.quantity > 0 && Math.floor(this.quantity) != this.quantity)
            this.quantity = Math.floor(this.quantity * 1000) / 1000;
        this.newEnabled = Boolean(Number(price) > 0 && name.length > 2 && Number(quantity) > 0 && price < 999999 && quantity < 999);
    };
    ItemList.prototype.editValidate = function (price, quantity, name) {
        var endPrice = String(price).slice(-1);
        var endQuantity = String(quantity).slice(-1);
        if (endPrice == "." ||
            endQuantity == ".") {
            this.editEnabled = false;
            return;
        }
        if (price > 0 && Math.floor(price) != price)
            this.uprice = Math.floor(price * 100) / 100;
        if (quantity > 0 && Math.floor(quantity) != quantity)
            this.uquantity = Math.floor(quantity * 1000) / 1000;
        this.editEnabled = Boolean(Number(price) > 0 && name.length > 2 && Number(quantity) > 0 && price < 999999 && quantity < 999);
    };
    ItemList.prototype.getItemIndexById = function (id) {
        var index = -1;
        for (var i = 0; i < this.dataProvider.length; i++) {
            if (this.dataProvider[i].id == id) {
                index = i;
                break;
            }
        }
        return index;
    };
    ItemList.ADD_TRIGGERED = 'addTriggered';
    ItemList.REMOVE_TRIGGERED = 'removeTriggered';
    ItemList.UPDATE_TRIGGERED = 'updateTriggered';
    __decorate([
        property({ type: Array, value: [], notify: true, reflectToAttribute: true }), 
        __metadata('design:type', Array)
    ], ItemList.prototype, "dataProvider");
    __decorate([
        property({ type: String, notify: true, reflectToAttribute: true }), 
        __metadata('design:type', String)
    ], ItemList.prototype, "name");
    __decorate([
        property({ type: Number, notify: true, reflectToAttribute: true }), 
        __metadata('design:type', Number)
    ], ItemList.prototype, "quantity");
    __decorate([
        property({ type: Number, notify: true, reflectToAttribute: true }), 
        __metadata('design:type', Number)
    ], ItemList.prototype, "price");
    __decorate([
        property({ type: Boolean, value: false, notify: true, reflectToAttribute: true }), 
        __metadata('design:type', Boolean)
    ], ItemList.prototype, "newEnabled");
    __decorate([
        property({ type: String, notify: true, reflectToAttribute: true }), 
        __metadata('design:type', String)
    ], ItemList.prototype, "uname");
    __decorate([
        property({ type: Number, notify: true, reflectToAttribute: true }), 
        __metadata('design:type', Number)
    ], ItemList.prototype, "uquantity");
    __decorate([
        property({ type: Number, notify: true, reflectToAttribute: true }), 
        __metadata('design:type', Number)
    ], ItemList.prototype, "uprice");
    __decorate([
        property({ type: Number, notify: true, reflectToAttribute: true }), 
        __metadata('design:type', Number)
    ], ItemList.prototype, "usum");
    __decorate([
        property({ type: Boolean, value: false, notify: true, reflectToAttribute: true }), 
        __metadata('design:type', Boolean)
    ], ItemList.prototype, "editEnabled");
    Object.defineProperty(ItemList.prototype, "updateSumChanged",
        __decorate([
            observe("uprice,uquantity"), 
            __metadata('design:type', Function), 
            __metadata('design:paramtypes', [Object, Object]), 
            __metadata('design:returntype', Object)
        ], ItemList.prototype, "updateSumChanged", Object.getOwnPropertyDescriptor(ItemList.prototype, "updateSumChanged")));
    __decorate([
        property({ type: Boolean, value: false, notify: true, reflectToAttribute: true }), 
        __metadata('design:type', Boolean)
    ], ItemList.prototype, "editMode");
    Object.defineProperty(ItemList.prototype, "addValidate",
        __decorate([
            observe("price,quantity,name"), 
            __metadata('design:type', Function), 
            __metadata('design:paramtypes', [Object, Object, Object]), 
            __metadata('design:returntype', Object)
        ], ItemList.prototype, "addValidate", Object.getOwnPropertyDescriptor(ItemList.prototype, "addValidate")));
    Object.defineProperty(ItemList.prototype, "editValidate",
        __decorate([
            observe("uprice,uquantity,uname"), 
            __metadata('design:type', Function), 
            __metadata('design:paramtypes', [Object, Object, Object]), 
            __metadata('design:returntype', Object)
        ], ItemList.prototype, "editValidate", Object.getOwnPropertyDescriptor(ItemList.prototype, "editValidate")));
    ItemList = __decorate([
        component("item-list"), 
        __metadata('design:paramtypes', [])
    ], ItemList);
    return ItemList;
})(polymer.Base);
ItemList.register();
//# sourceMappingURL=ItemList.js.map