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
var AjaxPreloader = (function (_super) {
    __extends(AjaxPreloader, _super);
    function AjaxPreloader() {
        _super.apply(this, arguments);
    }
    AjaxPreloader = __decorate([
        component("ajax-preloader"), 
        __metadata('design:paramtypes', [])
    ], AjaxPreloader);
    return AjaxPreloader;
})(polymer.Base);
AjaxPreloader.register();
//# sourceMappingURL=AjaxPreloader.js.map