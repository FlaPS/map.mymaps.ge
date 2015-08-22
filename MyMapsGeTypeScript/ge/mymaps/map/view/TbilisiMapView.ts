
@component("tbilisi-map-view")
class TbilisiMapView extends polymer.Base implements polymer.Element {

   // public static get CHANGE_MAP_TYPE(): string { return "changeMapType"; }


    private _map: L.Map;

    private _layers: Array<L.ILayer> = [];

    attached()
    {
        console.log('map view attached');
        
      
    }

    public initialize(): void {
        this._map = new L.Map('leafletView').setView([51.505, -0.09], 13);
        this._mapTypesProvider = new MapTypesProvider();

        this.mapTypesProvider.addEventListener(MapTypesProvider.TYPE_CHANGED, this.mapTypeChanged.bind(this))
        this.mainMapLayer = this.mapTypesProvider.types[0].layer;
    }

    private _mapTypesProvider: MapTypesProvider;

    public get mapTypesProvider(): MapTypesProvider {
        return this._mapTypesProvider;
    }










    private mapTypeChanged(mapType: MapType): void {
        this.mainMapLayer = mapType.layer;
    }





    private _mainMapLayer: L.ILayer;

    /**
     * Main map type, as a pane at the bottom;
     */
    public set mainMapLayer(layer: L.ILayer)
    {
        if (this._mainMapLayer) this._map.removeLayer(this._mainMapLayer);
        this._mainMapLayer = layer;
        this._map.addLayer(this._mainMapLayer, true);

    }
    public get mainMapLayer(): L.ILayer
    {
        return this._mainMapLayer;
    } 
}
TbilisiMapView.register(); 