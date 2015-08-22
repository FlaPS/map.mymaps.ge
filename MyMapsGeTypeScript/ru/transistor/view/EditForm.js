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
/// <reference path="../model/ItemVO.ts" />
var EditForm = (function (_super) {
    __extends(EditForm, _super);
    function EditForm() {
        _super.apply(this, arguments);
        this.name = "";
        this.quantity = "";
        this.price = "";
        this.sum = 0;
    }
    EditForm.prototype.fullnameChanged = function (newPrice, newQuatity) {
        this.sum = newPrice * newQuatity;
    };
    EditForm.prototype.onUpdateTriggered = function () {
        this.fire(EditForm.UPDATE_TRIGGERED);
    };
    EditForm.prototype.onRemoveTriggered = function () {
        this.fire(EditForm.REMOVE_TRIGGERED);
    };
    EditForm.UPDATE_TRIGGERED = 'updateTriggered';
    EditForm.REMOVE_TRIGGERED = 'removeTriggered';
    __decorate([
        property({ type: String, value: '', notify: true, reflectToAttribute: true }), 
        __metadata('design:type', String)
    ], EditForm.prototype, "name");
    __decorate([
        property({ type: String, value: '', notify: true, reflectToAttribute: true }), 
        __metadata('design:type', String)
    ], EditForm.prototype, "quantity");
    __decorate([
        property({ type: String, value: '', notify: true, reflectToAttribute: true }), 
        __metadata('design:type', String)
    ], EditForm.prototype, "price");
    Object.defineProperty(EditForm.prototype, "fullnameChanged",
        __decorate([
            observe("price,quantity"), 
            __metadata('design:type', Function), 
            __metadata('design:paramtypes', [Object, Object]), 
            __metadata('design:returntype', Object)
        ], EditForm.prototype, "fullnameChanged", Object.getOwnPropertyDescriptor(EditForm.prototype, "fullnameChanged")));
    __decorate([
        property({ type: Number, value: '', notify: true, reflectToAttribute: true }), 
        __metadata('design:type', Number)
    ], EditForm.prototype, "sum");
    EditForm = __decorate([
        component("edit-form"), 
        __metadata('design:paramtypes', [])
    ], EditForm);
    return EditForm;
})(polymer.Base);
EditForm.register();
//# sourceMappingURL=EditForm.js.map