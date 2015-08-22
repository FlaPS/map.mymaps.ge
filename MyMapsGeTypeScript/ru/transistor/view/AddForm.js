/// <reference path="../../../bower_components/polymer-ts/polymer-ts.ts" />
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
var AddForm = (function (_super) {
    __extends(AddForm, _super);
    function AddForm() {
        _super.apply(this, arguments);
        this.name = "0";
        this.amount = "0";
        this.price = "0";
    }
    AddForm.prototype.onSaveTrigger = function () {
    };
    __decorate([
        property({ type: String, value: '0', notify: true, reflectToAttribute: true })
    ], AddForm.prototype, "name");
    __decorate([
        property({ type: String, value: '0', notify: true, reflectToAttribute: true })
    ], AddForm.prototype, "amount");
    __decorate([
        property({ type: String, value: '0', notify: true, reflectToAttribute: true })
    ], AddForm.prototype, "price");
    AddForm = __decorate([
        component("add-form")
    ], AddForm);
    return AddForm;
})(polymer.Base);
AddForm.register();
//# sourceMappingURL=AddForm.js.map