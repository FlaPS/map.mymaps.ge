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
var MapTypeItemRenderer = (function (_super) {
    __extends(MapTypeItemRenderer, _super);
    function MapTypeItemRenderer() {
        _super.apply(this, arguments);
    }
    __decorate([
        property({ type: String, value: '', notify: true, reflectToAttribute: true })
    ], MapTypeItemRenderer.prototype, "name");
    __decorate([
        property({ type: String, value: '', notify: true, reflectToAttribute: true })
    ], MapTypeItemRenderer.prototype, "pic");
    __decorate([
        property({ type: String, value: '', notify: true, reflectToAttribute: true })
    ], MapTypeItemRenderer.prototype, "desc");
    __decorate([
        property({ type: Number, value: '', notify: true, reflectToAttribute: true })
    ], MapTypeItemRenderer.prototype, "age");
    __decorate([
        property({ type: Number, notify: true, reflectToAttribute: true })
    ], MapTypeItemRenderer.prototype, "intensity");
    __decorate([
        property({ type: Number, notify: true, reflectToAttribute: true })
    ], MapTypeItemRenderer.prototype, "hasphoto");
    __decorate([
        property({ type: Number, notify: true, reflectToAttribute: true })
    ], MapTypeItemRenderer.prototype, "hasvideo");
    MapTypeItemRenderer = __decorate([
        component("map-type-item-renderer")
    ], MapTypeItemRenderer);
    return MapTypeItemRenderer;
})(polymer.Base);
console.log('caroules-item-renderer registered');
CarouselItemRenderer.register();
//# sourceMappingURL=MapTypeItemRenderer.js.map