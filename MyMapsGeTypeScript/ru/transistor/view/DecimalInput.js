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
var DecimalInput = (function (_super) {
    __extends(DecimalInput, _super);
    function DecimalInput() {
        _super.apply(this, arguments);
        this.digit = undefined;
        this.signs = 2;
        this.maximum = 999999;
        this.minimum = 0;
    }
    DecimalInput.prototype.newChanged = function (minimum, maximum, value, signs) {
        if (value.slice(-1) != "." &&
            Number(value) > 0 &&
            Number(value) < maximum) {
            this.digit = Math.ceil(Number(value) * Math.pow(10, signs)) / Math.pow(10, signs);
        }
        this.digit = undefined;
        return;
    };
    __decorate([
        property({ type: Number, value: undefined, notify: true, reflectToAttribute: true })
    ], DecimalInput.prototype, "digit");
    __decorate([
        property({ type: Number, value: 2, notify: true, reflectToAttribute: true })
    ], DecimalInput.prototype, "signs");
    __decorate([
        property({ type: Number, value: 999999, notify: true, reflectToAttribute: true })
    ], DecimalInput.prototype, "maximum");
    __decorate([
        property({ type: Number, value: 0, notify: true, reflectToAttribute: true })
    ], DecimalInput.prototype, "minimum");
    Object.defineProperty(DecimalInput.prototype, "newChanged",
        __decorate([
            observe("minimum,maximum,value,signs")
        ], DecimalInput.prototype, "newChanged", Object.getOwnPropertyDescriptor(DecimalInput.prototype, "newChanged")));
    DecimalInput = __decorate([
        extend("paper-input"),
        component("decimal-input")
    ], DecimalInput);
    return DecimalInput;
})(polymer.Base);
DecimalInput.register();
//# sourceMappingURL=DecimalInput.js.map