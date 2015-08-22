var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var MapTypesProvider = (function (_super) {
    __extends(MapTypesProvider, _super);
    function MapTypesProvider() {
        _super.call(this);
        this._types = [];
        /**
         * Available map types for this map.
         */
        this.types = [];
        var googleLayer = new L.Google();
        googleLayer.initialize('SATELLITE', null);
        this.types.push(new MapType(0, googleLayer, "Google Satellite"));
        var googleLayer = new L.Google();
        googleLayer.initialize('ROADMAP', null);
        this.types.push(new MapType(1, googleLayer, "Google roadmap"));
        var googleLayer = new L.Google();
        googleLayer.initialize('HYBRID', null);
        this.types.push(new MapType(2, googleLayer, "Google hybrid"));
        var googleLayer = new L.Google();
        googleLayer.initialize('TERRAIN', null);
        this.types.push(new MapType(3, googleLayer, "Google Terrain"));
        var osmLayer = L.tileLayer('http://{s}.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
            subdomains: ['otile1', 'otile2', 'otile3', 'otile4']
        });
        this.types.push(new MapType(4, osmLayer, "Open Street Map"));
    }
    Object.defineProperty(MapTypesProvider, "TYPE_CHANGED", {
        /**
         * Map type was changed
         * @data - MapType object;
         */
        get: function () { return "typeChanged"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapTypesProvider.prototype, "mapType", {
        get: function () {
            return this._mapType;
        },
        /**
         * Main map type, as a pane at the bottom;
         */
        set: function (value) {
            this._mapType = value;
            this.dispatchEventWith(MapTypesProvider.TYPE_CHANGED, value);
        },
        enumerable: true,
        configurable: true
    });
    return MapTypesProvider;
})(ru.flaps.events.EventDispatcher);
//# sourceMappingURL=MapTypesProvider.js.map