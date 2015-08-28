

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



        /**
         *
         */ 
        public static get ZOOM_CHANGED(): string { return "zoomChanged"; }
        // public static get CHANGE_MAP_TYPE(): string { return "changeMapType"; }


        private _map: L.Map;
        public get leafletMap(): L.Map {
            return this._map
        }

        private _layers: Array<L.ILayer> = [];

        attached() {
            console.log('map view attached');


        }


        private _locateControl: any;
        private _zoomControl: any;
        public initialize(): void {
            L.Icon.Default.imagePath = 'http://as3.ru/mapge/MyMapsGeTypeScript/components/leaflet';

            var options: L.MapOptions = {}
            options.zoomControl = false;
            options.minZoom = 4;
            this._map = new L.Map('leafletView',options).setView([41.73558, 44.81495], 11);
            this._map.on('zoomend', this.zoomendHandler);
            this._zoom = 11;
            this._mapTypesProvider = new MapTypesProvider();

       
            this.mapTypesProvider.addEventListener(MapTypesProvider.TYPE_CHANGED, this.mapTypeChanged.bind(this))
            this.mainMapLayer = this.mapTypesProvider.types[0].layer;
            //mapbox plugin @see https://www.mapbox.com/mapbox.js/example/v1.0.0/leaflet-locatecontrol/
            L.control['locate']().addTo(this._map);

            var apiKeys = {
                'bing': 'AnRvpIKUSa29ARhk7djgoB5NjakSkchyrtlEqozjs3cAzwJ5s2SnJ7VAKhW2RVAC'
                , 'wikimapia': '60175C48-4B0C86C-A2D4D106-A5F37CAF-5A760C96-45526DF2-6D90C63B-511E68EE'
                , 'google': 'AIzaSyAGo33r6UECbDAJV63G20ULh6RtyzKBkXc'
            };
            this.geoManager = new L['GeoManager'](apiKeys);
         //   this.geoManager.addTo(this._map);
            this.geoManager.setOptions({ baselayer: 'google' })



            this._map.on("mousedown", this.mouseDownHandler);
        }

        private mouseDownHandler(e: L.LeafletMouseEvent): void
        {

        }


        private zoomendHandler(e: any): void {
            if (this.zoom != this._map.getZoom()) {
                this.zoom = this._map.getZoom();
                this.fire(GeMapView.ZOOM_CHANGED);
            }
        }

        private geoManager: any;
        private longPressHandler(e: L.LeafletMouseEvent): void {
            console.log(e);

            this.fire(GeMapView.LONG_PRESS, e.latlng, { bubbles: true });
        }

        private _mapTypesProvider: MapTypesProvider;

        public get mapTypesProvider(): MapTypesProvider {
            return this._mapTypesProvider;
        }










        private mapTypeChanged(mapType: MapType): void {

           // if (mapType.id == 11) {
         /*   mapType.layer['addTo'](this._map);
            mapType.layer['setOptions']({ baselayer: 'google', interactivelayer: 'wikimapia'  });
            */
        
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





        public get maxZoom(): number {
            return 18;
        }
        public get minZoom(): number {
            return 4
        }
        private _zoom: number = 1;
        public set zoom(value: number)
        {
            this._zoom = value;
            this._map.setZoom(value);
        }

        public get zoom(): number
        {
            return this._zoom
        }


        private _showMapUI: boolean = false;
        public set showMapsUI(value: boolean) {
            this._showMapUI = value
            if (this.showMapUI) {
              //  this.list.style.display = "block;";
            }
            else {

             //   this.list.style.display = "none;";
            }
        }
        public get showMapUI(): boolean {
            return this._showMapUI
        }
    }
}
ge.mymaps.map.view.GeMapView.register(); 