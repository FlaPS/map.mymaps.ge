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
var ge;
(function (ge) {
    var mymaps;
    (function (mymaps) {
        var map;
        (function (map) {
            var view;
            (function (view) {
                var GeMapView = (function (_super) {
                    __extends(GeMapView, _super);
                    function GeMapView() {
                        _super.apply(this, arguments);
                        this._layers = [];
                    }
                    Object.defineProperty(GeMapView, "LONG_PRESS", {
                        /**
                         * Event constant
                         * CustomEvent.detailt: L.LatLng  - object;s coordiates for fired event
                         * @see L.LatLng  http://leafletjs.com/reference.html#latlng
                         */
                        get: function () { return "longPress"; },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(GeMapView, "MAP_TYPE_CHANGED", {
                        /**
                         * Event constant
                         * CustomEvent.detailt: L.LatLng  - object;s coordiates for fired event
                         * @see L.LatLng  http://leafletjs.com/reference.html#latlng
                         */
                        get: function () { return "mapTypeChanged"; },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(GeMapView.prototype, "leafletMap", {
                        get: function () {
                            return this._map;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    GeMapView.prototype.attached = function () {
                        console.log('map view attached');
                    };
                    GeMapView.prototype.initialize = function () {
                        L.Icon.Default.imagePath = 'http://as3.ru/mapge/MyMapsGeTypeScript/components/leaflet';
                        this._map = new L.Map('leafletView').setView([41.73558, 44.81495], 11);
                        this._mapTypesProvider = new MapTypesProvider();
                        this._map.addEventListener('click', this.longPressHandler.bind(this));
                        this.mapTypesProvider.addEventListener(MapTypesProvider.TYPE_CHANGED, this.mapTypeChanged.bind(this));
                        this.mainMapLayer = this.mapTypesProvider.types[0].layer;
                        //mapbox plugin @see https://www.mapbox.com/mapbox.js/example/v1.0.0/leaflet-locatecontrol/
                        L.control['locate']().addTo(this._map);
                    };
                    GeMapView.prototype.longPressHandler = function (e) {
                        console.log(e);
                        this.fire(GeMapView.LONG_PRESS, e.latlng, { bubbles: true });
                    };
                    Object.defineProperty(GeMapView.prototype, "mapTypesProvider", {
                        get: function () {
                            return this._mapTypesProvider;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    GeMapView.prototype.mapTypeChanged = function (mapType) {
                        this.mainMapLayer = mapType.layer;
                        this._mapType = mapType;
                        this.fire(GeMapView.MAP_TYPE_CHANGED);
                    };
                    Object.defineProperty(GeMapView.prototype, "mapType", {
                        get: function () {
                            return this._mapType;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(GeMapView.prototype, "mainMapLayer", {
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
                    GeMapView = __decorate([
                        component("ge-map-view"), 
                        __metadata('design:paramtypes', [])
                    ], GeMapView);
                    return GeMapView;
                })(polymer.Base);
                view.GeMapView = GeMapView;
            })(view = map.view || (map.view = {}));
        })(map = mymaps.map || (mymaps.map = {}));
    })(mymaps = ge.mymaps || (ge.mymaps = {}));
})(ge || (ge = {}));
ge.mymaps.map.view.GeMapView.register();
//# sourceMappingURL=GeMapView.js.map