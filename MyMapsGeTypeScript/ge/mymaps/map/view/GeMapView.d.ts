declare module ge.mymaps.map.view {
    class GeMapView extends polymer.Base implements polymer.Element {
        /**
         * Event constant
         * CustomEvent.detailt: L.LatLng  - object;s coordiates for fired event
         * @see L.LatLng  http://leafletjs.com/reference.html#latlng
         */
        static LONG_PRESS: string;
        /**
         * Event constant
         * CustomEvent.detailt: L.LatLng  - object;s coordiates for fired event
         * @see L.LatLng  http://leafletjs.com/reference.html#latlng
         */
        static MAP_TYPE_CHANGED: string;
        private _map;
        leafletMap: L.Map;
        private _layers;
        attached(): void;
        initialize(): void;
        private longPressHandler(e);
        private _mapTypesProvider;
        mapTypesProvider: MapTypesProvider;
        private mapTypeChanged(mapType);
        private _mapType;
        mapType: MapType;
        private _mainMapLayer;
        /**
         * Main map type, as a pane at the bottom;
         */
        mainMapLayer: L.ILayer;
    }
}
