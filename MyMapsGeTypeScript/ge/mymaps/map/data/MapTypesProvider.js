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
        this._showWikimapiOverlay = false;
        var apiKeys = {
            'bing': 'AnRvpIKUSa29ARhk7djgoB5NjakSkchyrtlEqozjs3cAzwJ5s2SnJ7VAKhW2RVAC',
            'wikimapia': '60175C48-4B0C86C-A2D4D106-A5F37CAF-5A760C96-45526DF2-6D90C63B-511E68EE',
            'google': 'AIzaSyAGo33r6UECbDAJV63G20ULh6RtyzKBkXc'
        };
        this.geoManager = new L['GeoManager'](apiKeys);
        // geoManager.setOptions({ interactivelayer: 'wikimapia-api' });
        var googleLayer = new L.Google();
        googleLayer.initialize('ROADMAP', null);
        this.types.push(new MapType(0, googleLayer, "Google roadmap"));
        var googleLayer = new L.Google();
        googleLayer.initialize('HYBRID', null);
        this.types.push(new MapType(1, googleLayer, "Google hybrid"));
        var googleLayer = new L.Google();
        googleLayer.initialize('SATELLITE', null);
        this.types.push(new MapType(2, googleLayer, "Google Satellite"));
        var yandexLayer = new L['Yandex']();
        yandexLayer['initialize']('map'); //
        this.types.push(new MapType(3, yandexLayer, "Yandex Maps"));
        var yandexLayer = new L['Yandex']();
        yandexLayer['initialize']('satellite'); //
        this.types.push(new MapType(4, yandexLayer, "Yandex Satellite"));
        var yandexLayer = new L['Yandex']();
        yandexLayer['initialize']('hybrid'); //
        this.types.push(new MapType(5, yandexLayer, "Yandex Hybrid"));
        var bingLayer = new L['BingLayer']();
        bingLayer['initialize'](MapTypesProvider.BING_KEY, { type: "Road" }); //
        this.types.push(new MapType(6, bingLayer, "Bing Road"));
        var bingLayer = new L['BingLayer']();
        bingLayer['initialize'](MapTypesProvider.BING_KEY, { type: "Aerial" }); //
        this.types.push(new MapType(7, bingLayer, "Bing Aerial"));
        var bingLayer = new L['BingLayer']();
        bingLayer['initialize'](MapTypesProvider.BING_KEY, { type: "AerialWithLabels" }); //
        this.types.push(new MapType(8, bingLayer, "Bing Labels"));
        var osmLayer = L.tileLayer('http://{s}.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
            subdomains: ['otile1', 'otile2', 'otile3', 'otile4']
        });
        this.types.push(new MapType(9, osmLayer, "Open Street Map"));
        var osmLayer = L.tileLayer('http://{s}.tile2.opencyclemap.org/transport/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
            subdomains: ['a', 'b', 'c', 'd']
        });
        this.types.push(new MapType(10, osmLayer, "Open Street Transport"));
        // this.types.push(new MapType(11, this.geoManager, "Wikimapia"));
        //   http://as3.ru/mapge/MyMapsGeTypeScript/ge/mymaps/map/MapsGeFacade-test.html
        /*
   
   
   
           var googleLayer: L.GoogleLayer =new L.Google();
           googleLayer.initialize('TERRAIN', null);
           this.types.push(new MapType(3, googleLayer, "Google Terrain"));
        
   
         */
    }
    Object.defineProperty(MapTypesProvider, "BING_KEY", {
        get: function () { return "AnRvpIKUSa29ARhk7djgoB5NjakSkchyrtlEqozjs3cAzwJ5s2SnJ7VAKhW2RVAC"; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(MapTypesProvider, "GOOGLE_KEY", {
        get: function () { return "AIzaSyAGo33r6UECbDAJV63G20ULh6RtyzKBkXc"; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(MapTypesProvider, "WIKIMAPIA_KEY", {
        get: function () { return "60175C48-4B0C86C-A2D4D106-A5F37CAF-5A760C96-45526DF2-6D90C63B-511E68EE"; },
        enumerable: true,
        configurable: true
    });
    ;
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
            if (value != this._mapType) {
                this._mapType = value;
                this.dispatchEventWith(MapTypesProvider.TYPE_CHANGED, value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapTypesProvider.prototype, "showWikimapiaOverlay", {
        set: function (value) {
            this._showWikimapiOverlay = value;
            if (value) {
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapTypesProvider.prototype, "showWikimapiOverlay", {
        get: function () {
            return this._showWikimapiOverlay;
        },
        enumerable: true,
        configurable: true
    });
    return MapTypesProvider;
})(ru.flaps.events.EventDispatcher);
//# sourceMappingURL=MapTypesProvider.js.map