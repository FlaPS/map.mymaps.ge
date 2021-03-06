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
///<reference path="utils/Locator.ts" />
///<reference path="data/LocatorMapObject.ts" />
var ge;
(function (ge) {
    var mymaps;
    (function (mymaps) {
        var map;
        (function (map) {
            var MapsGeFacade = (function (_super) {
                __extends(MapsGeFacade, _super);
                function MapsGeFacade() {
                    _super.apply(this, arguments);
                    this.organizations = [];
                    this._showMapUI = true;
                    this.locatorMarker = new ge.mymaps.map.data.LocatorMapObject();
                }
                Object.defineProperty(MapsGeFacade, "READY", {
                    /**
                     * Entrie map ready event. Use one to hide default UI and set initial layers
                     * @see L.LatLng      http://leafletjs.com/reference.html#latlng
                     */
                    get: function () { return "facadeReady"; },
                    enumerable: true,
                    configurable: true
                });
                MapsGeFacade.prototype.attached = function () {
                    //new ge.mymaps.map.data.GeOrganization()
                    console.log(this);
                    console.log('maps-ge-facade attached()');
                    window['gmloaded'] = this.gmLoadedHandler.bind(this);
                    if (window['google'] && window['google']['maps']) {
                        setTimeout(window['gmloaded'], 1000);
                    }
                };
                // private list: MapTypeList;
                MapsGeFacade.prototype.gmLoadedHandler = function () {
                    window['gmloaded'] = function () { };
                    this.locator = ge.mymaps.map.utils.Locator.instance;
                    this.locator.updateLiveLocation();
                    this.locator.addEventListener(ge.mymaps.map.utils.Locator.GEO_LIVE_UPDATE, this.geoLiveUpdateHandler.bind(this));
                    console.log('google maps loaded');
                    console.log('web components ready ');
                    this._mapView = document['getElementById']('mapView');
                    this._mapView.initialize();
                    // this.list = <any>document.getElementById('typesList');
                    // this.list.setMapTypesProvider(this._mapView.mapTypesProvider);
                    this._markerCluster = this.mapView.markerCluster;
                    this.showMapUI = false;
                    /*var list = document.getElementById('list');
                    list.mapTypesProvider = map.mapTypesProvider;*/
                    this.fire(ge.mymaps.map.MapsGeFacade.READY);
                };
                Object.defineProperty(MapsGeFacade.prototype, "mapView", {
                    get: function () {
                        return this._mapView;
                    },
                    enumerable: true,
                    configurable: true
                });
                MapsGeFacade.prototype.geoLiveUpdateHandler = function () {
                    var i = 0;
                    while (i < this.organizations.length) {
                        this.organizations[i].updateMarker();
                        i++;
                    }
                };
                MapsGeFacade.prototype.addOrganization = function (obj) {
                    this.organizations.push(obj);
                    obj.marker['mapObject'] = obj;
                    this._markerCluster.addLayer(obj.marker);
                    return obj;
                };
                MapsGeFacade.prototype.removeOrganization = function (obj) {
                    this.organizations.splice(this.organizations.indexOf(obj), 1);
                    this._markerCluster.removeLayer(obj.marker);
                    return obj;
                };
                MapsGeFacade.prototype.clearOrganizations = function () {
                    while (this.organizations.length > 0) {
                        this.removeOrganization(this.organizations[0]);
                    }
                };
                Object.defineProperty(MapsGeFacade.prototype, "showMapUI", {
                    get: function () {
                        return this._showMapUI;
                    },
                    set: function (value) {
                        this._showMapUI = value;
                        if (value) {
                        }
                        else {
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                MapsGeFacade.prototype.moveToLocation = function () {
                    ge.mymaps.map.utils.Locator.instance.once(ge.mymaps.map.utils.Locator.GEO_LIVE_UPDATE, this.moveMapToGeoLiveUpdateHandler.bind(this));
                    ge.mymaps.map.utils.Locator.instance.updateLiveLocation();
                };
                MapsGeFacade.prototype.moveMapToGeoLiveUpdateHandler = function (e) {
                    console.log("move map to current user's location");
                    this.mapView.leafletMap.setView(ge.mymaps.map.utils.Locator.instance.latLng);
                    this.mapView.leafletMap.addLayer(this.locatorMarker.marker);
                    this.locatorMarker.lat = ge.mymaps.map.utils.Locator.instance.lat;
                    this.locatorMarker.lng = ge.mymaps.map.utils.Locator.instance.lng;
                    this.mapView.centerLatLng = this.locatorMarker.latLng;
                    this.locatorMarker.updateMarker();
                };
                MapsGeFacade = __decorate([
                    component("maps-ge-facade"), 
                    __metadata('design:paramtypes', [])
                ], MapsGeFacade);
                return MapsGeFacade;
            })(polymer.Base);
            map.MapsGeFacade = MapsGeFacade;
        })(map = mymaps.map || (mymaps.map = {}));
    })(mymaps = ge.mymaps || (ge.mymaps = {}));
})(ge || (ge = {}));
ge.mymaps.map.MapsGeFacade.register();
//# sourceMappingURL=MapsGeFacade.js.map