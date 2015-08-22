class MapTypesProvider extends ru.flaps.events.EventDispatcher
{
    /**
     * Map type was changed
     * @data - MapType object;
     */
    public static get TYPE_CHANGED(): string { return "typeChanged"; } 


    private _types: Array<MapType> = [];

    /**
     * Available map types for this map.
     */
    public types: Array<MapType> = [];



    constructor() {
     super();
        var googleLayer: L.GoogleLayer =new  L.Google();
        googleLayer.initialize('SATELLITE', null);
        this.types.push(new MapType(0, googleLayer, "Google Satellite"));

        var googleLayer: L.GoogleLayer =new  L.Google();
        googleLayer.initialize('ROADMAP', null);
        this.types.push(new MapType(1, googleLayer, "Google roadmap"));

        var googleLayer: L.GoogleLayer =new L.Google();
        googleLayer.initialize('HYBRID', null);
        this.types.push(new MapType(2, googleLayer, "Google hybrid"));

        var googleLayer: L.GoogleLayer =new L.Google();
        googleLayer.initialize('TERRAIN', null);
        this.types.push(new MapType(3, googleLayer, "Google Terrain"));
     

        let osmLayer: L.ILayer = L.tileLayer('http://{s}.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
            subdomains: ['otile1', 'otile2', 'otile3', 'otile4']
        });
        this.types.push(new MapType(4, osmLayer, "Open Street Map"));
    }


    private _mapType: MapType;

    /**
     * Main map type, as a pane at the bottom;
     */
    public set mapType(value:MapType) {
        this._mapType = value;
        this.dispatchEventWith(MapTypesProvider.TYPE_CHANGED, value);
    }
    public get mapType(): MapType {
       return this._mapType
    } 

} 