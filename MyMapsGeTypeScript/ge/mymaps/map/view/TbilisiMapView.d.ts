declare class TbilisiMapView extends polymer.Base implements polymer.Element {
    private _map;
    private _layers;
    attached(): void;
    initialize(): void;
    private _mapTypesProvider;
    mapTypesProvider: MapTypesProvider;
    private mapTypeChanged(mapType);
    private _mainMapLayer;
    /**
     * Main map type, as a pane at the bottom;
     */
    mainMapLayer: L.ILayer;
}
