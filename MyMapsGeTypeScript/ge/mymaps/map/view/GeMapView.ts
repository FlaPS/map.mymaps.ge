

module ge.mymaps.map.view {
    @component("ge-map-view")
    export class GeMapView extends polymer.Base implements polymer.Element {
        /**
         * Event constant
         * CustomEvent.detailt: L.LatLng  - object;s coordiates for fired event
         * @see L.LatLng  http://leafletjs.com/reference.html#latlng
         */
        public static get LONG_PRESS(): string { return "longPress"; }

        /**
         * Event constant
         * CustomEvent.detailt: L.LatLng  - object;s coordiates for fired event
         * @see L.LatLng  http://leafletjs.com/reference.html#latlng
         */
        public static get MAP_TYPE_CHANGED(): string { return "mapTypeChanged"; }


        // public static get CHANGE_MAP_TYPE(): string { return "changeMapType"; }


        private _map: L.Map;
        public get leafletMap(): L.Map {
            return this._map
        }

        private _layers: Array<L.ILayer> = [];

        attached() {
            console.log('map view attached');


        }

        public initialize(): void {
            L.Icon.Default.imagePath = 'http://as3.ru/mapge/MyMapsGeTypeScript/components/leaflet';
            this._map = new L.Map('leafletView').setView([41.73558, 44.81495], 11);
            this._mapTypesProvider = new MapTypesProvider();

            this._map.addEventListener('click', this.longPressHandler.bind(this));
            this.mapTypesProvider.addEventListener(MapTypesProvider.TYPE_CHANGED, this.mapTypeChanged.bind(this))
            this.mainMapLayer = this.mapTypesProvider.types[0].layer;
        }

        private longPressHandler(e: L.LeafletMouseEvent): void {
            console.log(e);

            this.fire(GeMapView.LONG_PRESS, e.latlng, { bubbles: true });
        }

        private _mapTypesProvider: MapTypesProvider;

        public get mapTypesProvider(): MapTypesProvider {
            return this._mapTypesProvider;
        }










        private mapTypeChanged(mapType: MapType): void {
            this.mainMapLayer = mapType.layer;
            this._mapType = mapType;
            this.fire(GeMapView.MAP_TYPE_CHANGED);
        }
        private _mapType: MapType;
        public get mapType(): MapType {
            return this._mapType
        }



        private _mainMapLayer: L.ILayer;

        /**
         * Main map type, as a pane at the bottom;
         */
        public set mainMapLayer(layer: L.ILayer) {
            if (this._mainMapLayer) this._map.removeLayer(this._mainMapLayer);
            this._mainMapLayer = layer;
            this._map.addLayer(this._mainMapLayer, true);

        }
        public get mainMapLayer(): L.ILayer {
            return this._mainMapLayer;
        }
    }
}
ge.mymaps.map.view.GeMapView.register(); 