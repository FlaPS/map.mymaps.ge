var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
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
var CarouselItemRenderer = (function (_super) {
    __extends(CarouselItemRenderer, _super);
    function CarouselItemRenderer() {
        _super.apply(this, arguments);
    }
    __decorate([
        property({ type: String, value: '', notify: true, reflectToAttribute: true }), 
        __metadata('design:type', String)
    ], CarouselItemRenderer.prototype, "name");
    __decorate([
        property({ type: String, value: '', notify: true, reflectToAttribute: true }), 
        __metadata('design:type', String)
    ], CarouselItemRenderer.prototype, "pic");
    __decorate([
        property({ type: String, value: '', notify: true, reflectToAttribute: true }), 
        __metadata('design:type', String)
    ], CarouselItemRenderer.prototype, "desc");
    __decorate([
        property({ type: Number, value: '', notify: true, reflectToAttribute: true }), 
        __metadata('design:type', Number)
    ], CarouselItemRenderer.prototype, "age");
    __decorate([
        property({ type: Number, notify: true, reflectToAttribute: true }), 
        __metadata('design:type', Number)
    ], CarouselItemRenderer.prototype, "intensity");
    __decorate([
        property({ type: Number, notify: true, reflectToAttribute: true }), 
        __metadata('design:type', Number)
    ], CarouselItemRenderer.prototype, "hasphoto");
    __decorate([
        property({ type: Number, notify: true, reflectToAttribute: true }), 
        __metadata('design:type', Number)
    ], CarouselItemRenderer.prototype, "hasvideo");
    CarouselItemRenderer = __decorate([
        component("carousel-item-renderer"), 
        __metadata('design:paramtypes', [])
    ], CarouselItemRenderer);
    return CarouselItemRenderer;
})(polymer.Base);
console.log('caroules-item-renderer registered');
CarouselItemRenderer.register();
//# sourceMappingURL=CarouselItemRenderer.js.map