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
var TbilisiMapView = (function (_super) {
    __extends(TbilisiMapView, _super);
    function TbilisiMapView() {
        _super.apply(this, arguments);
        this._layers = [];
    }
    TbilisiMapView.prototype.attached = function () {
        console.log('map view attached');
    };
    TbilisiMapView.prototype.initialize = function () {
        this._map = new L.Map('leafletView').setView([51.505, -0.09], 13);
        this._mapTypesProvider = new MapTypesProvider();
        this.mapTypesProvider.addEventListener(MapTypesProvider.TYPE_CHANGED, this.mapTypeChanged.bind(this));
        this.mainMapLayer = this.mapTypesProvider.types[0].layer;
    };
    Object.defineProperty(TbilisiMapView.prototype, "mapTypesProvider", {
        get: function () {
            return this._mapTypesProvider;
        },
        enumerable: true,
        configurable: true
    });
    TbilisiMapView.prototype.mapTypeChanged = function (mapType) {
        this.mainMapLayer = mapType.layer;
    };
    Object.defineProperty(TbilisiMapView.prototype, "mainMapLayer", {
        get: function () {
            return this._mainMapLayer;
        },
        /**
         * Main map type, as a pane at the bottom;
         */
        set: function (layer) {
            if (this._mainMapLayer)
                this._map.removeLayer(this._mainMapLayer);
            this._mainMapLayer = layer;
            this._map.addLayer(this._mainMapLayer, true);
        },
        enumerable: true,
        configurable: true
    });
    TbilisiMapView = __decorate([
        component("tbilisi-map-view"), 
        __metadata('design:paramtypes', [])
    ], TbilisiMapView);
    return TbilisiMapView;
})(polymer.Base);
TbilisiMapView.register();
//# sourceMappingURL=TbilisiMapView.js.map