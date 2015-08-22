var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
/// <reference path="ItemVO.ts" />
var ItemList = (function (_super) {
    __extends(ItemList, _super);
    function ItemList() {
        _super.apply(this, arguments);
        this.name = "0";
        this.amount = "0";
        this.price = "0";
        this.sum = "0";
        this.dataProvider = [new ItemVO("Cabbige", 25, 17.30),
            new ItemVO("Potato", 12.54, 8.30),
            new ItemVO("Tomato", 14, 16.4)];
    }
    ItemList.prototype.sumChanged = function (newAmount, newPrice) {
        this.sum = (newAmount * newPrice).toString();
    };
    __decorate([
        property({ type: String, value: '0', notify: true, reflectToAttribute: true })
    ], ItemList.prototype, "name");
    __decorate([
        property({ type: String, value: '0', notify: true, reflectToAttribute: true })
    ], ItemList.prototype, "amount");
    __decorate([
        property({ type: String, value: '0', notify: true, reflectToAttribute: true })
    ], ItemList.prototype, "price");
    Object.defineProperty(ItemList.prototype, "sumChanged",
        __decorate([
            observe("amount,price")
        ], ItemList.prototype, "sumChanged", Object.getOwnPropertyDescriptor(ItemList.prototype, "sumChanged")));
    __decorate([
        property({ type: String, value: '0', notify: true, reflectToAttribute: true })
    ], ItemList.prototype, "sum");
    __decorate([
        property({
            type: Array, value: [new ItemVO("Cabbige", 25, 17.30),
                new ItemVO("Potato", 12.54, 8.30),
                new ItemVO("Tomato", 14, 16.4)], notify: true, reflectToAttribute: true })
    ], ItemList.prototype, "dataProvider");
    ItemList = __decorate([
        component("item-list")
    ], ItemList);
    return ItemList;
})(polymer.Base);
ItemList.register();
//# sourceMappingURL=ItemList.js.map