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
///<reference path="../../../../ru/flaps/uihelpers/RoundProgress.ts" />
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
                        this._zoom = 1;
                        this._showMapUI = false;
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
                    Object.defineProperty(GeMapView, "MARKER_PRESS", {
                        /**
                      * Event constant
                      * CustomEvent.detailt: L.LatLng  - object;s coordiates for fired event
                      * @see L.LatLng  http://leafletjs.com/reference.html#latlng
                      */
                        get: function () { return "markerPress"; },
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
                    Object.defineProperty(GeMapView, "ZOOM_CHANGED", {
                        /**
                         * Zoom of the map was changed
                         */
                        get: function () { return "zoomChanged"; },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(GeMapView, "CENTER_CHANGED", {
                        /**
                         * Center of map view was changed
                         */
                        get: function () { return "latLngChanged"; },
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
                        this._roundDiv = document.getElementById('geRoundDiv');
                        //this.list = <any>document.getElementById('list')
                        this._roundProgress = new ru.flaps.uihelpers.RoundProgress(document.getElementById('geRoundCanvas'));
                    };
                    GeMapView.prototype.initialize = function () {
                        L.Icon.Default.imagePath = 'http://as3.ru/mapge/MyMapsGeTypeScript/components/leaflet';
                        var options = {};
                        options.zoomControl = false;
                        options.minZoom = 4;
                        this._map = new L.Map('leafletView', options).setView([41.73558, 44.81495], 11);
                        this.centerLatLng = L.latLng(41.73558, 44.81495);
                        this._map.on('zoomend', this.zoomendHandler.bind(this));
                        this._map.on('dragend', this.dragEndHandler.bind(this));
                        this._zoom = 11;
                        this._mapTypesProvider = new MapTypesProvider();
                        this.baseLayers = L.featureGroup();
                        this.clickGroup = L.featureGroup();
                        this._map.addLayer(this.baseLayers);
                        this.mapTypesProvider.addEventListener(MapTypesProvider.TYPE_CHANGED, this.mapTypeChanged.bind(this));
                        this.mainMapLayer = this.mapTypesProvider.types[0].layer;
                        //mapbox plugin @see https://www.mapbox.com/mapbox.js/example/v1.0.0/leaflet-locatecontrol/  ;
                        //L.control['locate']().addTo(this._map);
                        var apiKeys = {
                            'bing': 'AnRvpIKUSa29ARhk7djgoB5NjakSkchyrtlEqozjs3cAzwJ5s2SnJ7VAKhW2RVAC',
                            'wikimapia': '60175C48-4B0C86C-A2D4D106-A5F37CAF-5A760C96-45526DF2-6D90C63B-511E68EE',
                            'google': 'AIzaSyAGo33r6UECbDAJV63G20ULh6RtyzKBkXc'
                        };
                        /*  this.geoManager = new L['GeoManager'](apiKeys);
                       //   this.geoManager.addTo(this._map);
                          this.geoManager.setOptions({ baselayer: 'google' })*/
                        this.markerCluster = new L['MarkerClusterGroup']();
                        //this.clickGroup.addLayer(this.markerCluster);
                        this.leafletMap.addLayer(this.markerCluster);
                        this.baseLayerMouseOutBind = this.baseLayerMouseOutHandler.bind(this);
                        this.baseLayerMouseOverBind = this.baseLayerMouseOverHandler.bind(this);
                        this.mouseExitBind = this.mouseExitHandler.bind(this);
                        this.mouseDownBind = this.mouseDownHandler.bind(this);
                        this.markerCluster['on']('mouseover', this.baseLayerMouseOutBind);
                        this.markerCluster['on']('mouseout', this.baseLayerMouseOverBind);
                        this.markerCluster['on']('click', this.markerClickHandler.bind(this));
                        this.markerCluster['on']('clustermouseover', this.baseLayerMouseOutBind);
                        this.markerCluster['on']('clustermouseout', this.baseLayerMouseOverBind);
                        this.baseLayerMouseOverHandler(null);
                    };
                    Object.defineProperty(GeMapView.prototype, "centerLatLng", {
                        get: function () {
                            return this._map.getCenter();
                        },
                        set: function (value) {
                            this._centerLatLng = value;
                            this._map.setView(this._centerLatLng);
                        },
                        enumerable: true,
                        configurable: true
                    });
                    GeMapView.prototype.dragEndHandler = function (e) {
                        this.centerLatLng = this._map.getCenter();
                        this.fire(GeMapView.CENTER_CHANGED, this.centerLatLng);
                    };
                    GeMapView.prototype.markerClickHandler = function (e) {
                        console.log('firing marker press');
                        this.fire(GeMapView.MARKER_PRESS, new ge.mymaps.map.events.MarkerPressDetail(this.lastMouseDownEvent.latlng, e.target['mapObject']));
                    };
                    GeMapView.prototype.baseLayerMouseOverHandler = function (e) {
                        //      console.log('bind mouseDown');
                        this._map.on("mousedown", this.mouseDownBind);
                    };
                    GeMapView.prototype.baseLayerMouseOutHandler = function (e) {
                        this._map.off("mousedown", this.mouseDownBind);
                        //    console.log('unbind mouseDown');
                        this.mouseExitHandler(null);
                    };
                    GeMapView.prototype.mouseDownHandler = function (e) {
                        console.log('mouseDown');
                        if (this.prevTween)
                            this.prevTween.kill();
                        this._roundDiv.style.display = 'block';
                        this._roundDiv.style.left = (e.containerPoint.x - 25).toString() + 'px';
                        this._roundDiv.style.top = (e.containerPoint.y - 25).toString() + 'px';
                        this._roundProgress.value = 0;
                        this.prevTween = new TweenLite(this._roundProgress, 1, { value: 1 });
                        this._map.on("mouseup", this.mouseExitBind);
                        this._map.on("dragstart", this.mouseExitBind);
                        this._map.on("mouseout", this.mouseExitBind);
                        this.lastMouseDownEvent = e;
                        this.longPressTimeout = setTimeout(this.dispatchLongPress.bind(this), 1000);
                    };
                    GeMapView.prototype.mouseExitHandler = function (e) {
                        if (e === void 0) { e = null; }
                        console.log('mouseExit');
                        if (this.prevTween)
                            this.prevTween.kill();
                        this._roundDiv.style.display = 'none';
                        this._map.off("mouseup", this.mouseExitBind);
                        this._map.off("dragstart", this.mouseExitBind);
                        this._map.off("mouseout", this.mouseExitBind);
                        ///  var dir: google.maps.DirectionsResult;
                        clearTimeout(this.longPressTimeout);
                        // console.log(e.type);
                    };
                    GeMapView.prototype.dispatchLongPress = function () {
                        if (this.prevTween)
                            this.prevTween.kill();
                        console.log('long press dispatched');
                        this.fire(GeMapView.LONG_PRESS, new ge.mymaps.map.events.LongPressDetail(this.lastMouseDownEvent.latlng));
                        this.mouseExitHandler();
                    };
                    GeMapView.prototype.buildRouteTo = function (lat, lng) {
                        this.mouseExitHandler(null);
                        if (this.routing != null)
                            this._map.removeControl(this.routing);
                        //  this._map.removeControl
                        this.routing = L['Routing'].control({
                            waypoints: [
                                L.latLng(ge.mymaps.map.utils.Locator.instance.lat, ge.mymaps.map.utils.Locator.instance.lng),
                                L.latLng(lat, lng)
                            ],
                            routeWhileDragging: true
                        }).addTo(this._map);
                    };
                    GeMapView.prototype.zoomendHandler = function (e) {
                        if (this.zoom != this._map.getZoom()) {
                            this.zoom = this._map.getZoom();
                            this.fire(GeMapView.ZOOM_CHANGED);
                        }
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
                        // if (mapType.id == 11) {
                        /*   mapType.layer['addTo'](this._map);
                           mapType.layer['setOptions']({ baselayer: 'google', interactivelayer: 'wikimapia'  });
                           */
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
                            if (this._mainMapLayer) {
                                this.baseLayers.removeLayer(this._mainMapLayer);
                            }
                            this._mainMapLayer = layer;
                            this.baseLayers.addLayer(this._mainMapLayer);
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(GeMapView.prototype, "maxZoom", {
                        get: function () {
                            return 18;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(GeMapView.prototype, "minZoom", {
                        get: function () {
                            return 4;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(GeMapView.prototype, "zoom", {
                        get: function () {
                            return this._zoom;
                        },
                        set: function (value) {
                            this._zoom = value;
                            this._map.setZoom(value);
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(GeMapView.prototype, "showMapsUI", {
                        set: function (value) {
                            this._showMapUI = value;
                            if (this.showMapUI) {
                            }
                            else {
                            }
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(GeMapView.prototype, "showMapUI", {
                        get: function () {
                            return this._showMapUI;
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