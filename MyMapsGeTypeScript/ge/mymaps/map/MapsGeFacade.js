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
var MapsGeFacade = (function (_super) {
    __extends(MapsGeFacade, _super);
    function MapsGeFacade() {
        _super.apply(this, arguments);
        this.organizations = [];
    }
    Object.defineProperty(MapsGeFacade, "READY", {
        /**
         * @see L.LatLng  http://leafletjs.com/reference.html#latlng
         */
        get: function () { return "facadeReady"; },
        enumerable: true,
        configurable: true
    });
    MapsGeFacade.prototype.attached = function () {
        console.log(this);
        console.log('maps-ge-facade attached()');
        window['gmloaded'] = this.gmLoadedHandler.bind(this);
        if (window['google'] && window['google']['maps']) {
            setTimeout(window['gmloaded'], 200);
        }
    };
    MapsGeFacade.prototype.gmLoadedHandler = function () {
        window['gmloaded'] = function () { };
        this.locator = ge.mymaps.map.utils.Locator.instance;
        this.locator.updateLiveLocation();
        this.locator.addEventListener(ge.mymaps.map.utils.Locator.GEO_LIVE_UPDATE, this.geoLiveUpdateHandler.bind(this));
        console.log('google maps loaded');
        console.log('web components ready ');
        this._map = document['getElementById']('mapView');
        this._map.initialize();
        var list = document.getElementById('typesList');
        list.setMapTypesProvider(this._map.mapTypesProvider);
        this._markerCluster = new L['MarkerClusterGroup']();
        this._map.leafletMap.addLayer(this._markerCluster);
        /*var list = document.getElementById('list');
        list.mapTypesProvider = map.mapTypesProvider;*/
        this.fire(MapsGeFacade.READY);
    };
    MapsGeFacade.prototype.geoLiveUpdateHandler = function () {
        var i = 0;
        while (i < this.organizations.length) {
            this.organizations[i].updateMarker();
            i++;
        }
    };
    MapsGeFacade.prototype.addOrganization = function (obj) {
        this.organizations.push(obj);
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
    MapsGeFacade = __decorate([
        component("maps-ge-facade"), 
        __metadata('design:paramtypes', [])
    ], MapsGeFacade);
    return MapsGeFacade;
})(polymer.Base);
MapsGeFacade.register();
//# sourceMappingURL=MapsGeFacade.js.map