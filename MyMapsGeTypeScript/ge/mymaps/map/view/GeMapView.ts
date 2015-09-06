
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
        public static get MARKER_PRESS(): string { return "markerPress"; }
        /**
         * Event constant
         * CustomEvent.detailt: L.LatLng  - object;s coordiates for fired event
         * @see L.LatLng  http://leafletjs.com/reference.html#latlng
         */
        public static get MAP_TYPE_CHANGED(): string { return "mapTypeChanged"; }



        /**
         * Zoom of the map was changed
         */ 
        public static get ZOOM_CHANGED(): string { return "zoomChanged"; }

        /**
         * Center of map view was changed
         */
        public static get CENTER_CHANGED(): string { return "latLngChanged"; }
        // public static get CHANGE_MAP_TYPE(): string { return "changeMapType"; }


        private _map: L.Map;
        public get leafletMap(): L.Map {
            return this._map
        }

        private _layers: Array<L.ILayer> = [];

        private _roundDiv: HTMLElement;
        private _roundProgress: ru.flaps.uihelpers.RoundProgress;
        attached() {
            console.log('map view attached');
            this._roundDiv = <any>document.getElementById('geRoundDiv')
            this._roundProgress = new ru.flaps.uihelpers.RoundProgress(<any>document.getElementById('geRoundCanvas'));
         
        }


        private _locateControl: any;
        private _zoomControl: any;

        private baseLayers: L.FeatureGroup<L.ILayer>;
        private clickGroup: L.FeatureGroup<L.ILayer>;
        public initialize(): void {
            L.Icon.Default.imagePath = 'http://as3.ru/mapge/MyMapsGeTypeScript/components/leaflet';

            var options: L.MapOptions = {}
            options.zoomControl = false;
            options.minZoom = 4;
           
            this._map = new L.Map('leafletView', options).setView([41.73558, 44.81495], 11);
            this.centerLatLng = L.latLng( 41.73558, 44.81495 );
            this._map.on('zoomend', this.zoomendHandler.bind(this));
            this._map.on('dragend', this.dragEndHandler.bind(this));
            this._zoom = 11;
            this._mapTypesProvider = new MapTypesProvider();
            this.baseLayers = L.featureGroup();
            this.clickGroup = L.featureGroup();
            this._map.addLayer(this.baseLayers);
       
            this.mapTypesProvider.addEventListener(MapTypesProvider.TYPE_CHANGED, this.mapTypeChanged.bind(this))
            this.mainMapLayer = this.mapTypesProvider.types[0].layer;
            //mapbox plugin @see https://www.mapbox.com/mapbox.js/example/v1.0.0/leaflet-locatecontrol/
            L.control['locate']().addTo(this._map);

            var apiKeys = {
                    'bing': 'AnRvpIKUSa29ARhk7djgoB5NjakSkchyrtlEqozjs3cAzwJ5s2SnJ7VAKhW2RVAC'
                ,   'wikimapia': '60175C48-4B0C86C-A2D4D106-A5F37CAF-5A760C96-45526DF2-6D90C63B-511E68EE'
                ,   'google': 'AIzaSyAGo33r6UECbDAJV63G20ULh6RtyzKBkXc'
            };
          /*  this.geoManager = new L['GeoManager'](apiKeys);
         //   this.geoManager.addTo(this._map);
            this.geoManager.setOptions({ baselayer: 'google' })*/
            this.markerCluster = new L['MarkerClusterGroup']();
            //this.clickGroup.addLayer(this.markerCluster);
            this.leafletMap.addLayer(this.markerCluster);
            this.baseLayerMouseOutBind = this.baseLayerMouseOutHandler.bind(this);
            this.baseLayerMouseOverBind = this.baseLayerMouseOverHandler.bind(this);
            this.mouseExitBind = this.mouseExitHandler.bind(this);
            this.mouseDownBind = this.mouseDownHandler.bind(this);
            this.markerCluster['on']('mouseover', this.baseLayerMouseOutBind);
            this.markerCluster['on']('mouseout', this.baseLayerMouseOverBind);
            this.markerCluster['on']('click', this.markerClickHandler.bind(this));
            this.markerCluster['on']('clustermouseover', this.baseLayerMouseOutBind);
            this.markerCluster['on']('clustermouseout', this.baseLayerMouseOverBind);
            this.baseLayerMouseOverHandler(null);

        }

        private _centerLatLng: L.LatLng;
        public get centerLatLng(): L.LatLng {
            return this._map.getCenter();
        }
        public set centerLatLng(value: L.LatLng) {
            this._centerLatLng = value;
            this._map.setView(this._centerLatLng);
        }
        private dragEndHandler(e: L.LeafletDragEndEvent) {
            this.centerLatLng = this._map.getCenter();
            this.fire(GeMapView.CENTER_CHANGED, this.centerLatLng);
        }
        private markerClickHandler(e: L.LeafletMouseEvent) {
            console.log('firing marker press');
            
            this.fire(GeMapView.MARKER_PRESS, new ge.mymaps.map.events.MarkerPressDetail(this.lastMouseDownEvent.latlng, e.target['mapObject']));
        }
        public markerCluster: any;
        private baseLayerMouseOverBind: Function;
        private baseLayerMouseOutBind: Function;
        private baseLayerMouseOverHandler(e: L.LeafletMouseEvent): void
        {
    //      console.log('bind mouseDown');
            this._map.on("mousedown", this.mouseDownBind);
        }
        private baseLayerMouseOutHandler(e: L.LeafletMouseEvent): void {
            this._map.off("mousedown", this.mouseDownBind);
        //    console.log('unbind mouseDown');
            this.mouseExitHandler(null);
        }
        private mouseDownBind: Function;
        private mouseExitBind: Function;
        private longPressTimeout: number;
        private lastMouseDownEvent: L.LeafletMouseEvent;
        private prevTween: TweenLite;
        private mouseDownHandler(e: L.LeafletMouseEvent): void
        {
            console.log('mouseDown');
            if (this.prevTween) this.prevTween.kill();
            this._roundDiv.style.display = 'block';
            this._roundDiv.style.left = (e.containerPoint.x-25).toString()+'px';
            this._roundDiv.style.top = (e.containerPoint.y-25).toString() +'px';
            this._roundProgress.value = 0;
           this.prevTween = new TweenLite(this._roundProgress, 1, { value: 1 });
        
            this._map.on("mouseup", this.mouseExitBind);
            this._map.on("dragstart", this.mouseExitBind);
            this._map.on("mouseout", this.mouseExitBind);
            this.lastMouseDownEvent = e;
            this.longPressTimeout = setTimeout(this.dispatchLongPress.bind(this), 1000);
        }
        private mouseExitHandler(e: L.LeafletMouseEvent = null): void {

            console.log('mouseExit');
            if (this.prevTween) this.prevTween.kill();
            this._roundDiv.style.display = 'none';
            this._map.off("mouseup", this.mouseExitBind);
            this._map.off("dragstart", this.mouseExitBind);
            this._map.off("mouseout", this.mouseExitBind);
            clearTimeout(this.longPressTimeout);
           // console.log(e.type);
        }
        private routing: any;
        private dispatchLongPress(): void {
            if (this.prevTween) this.prevTween.kill();
       
            console.log('long press dispatched');
            this.fire(GeMapView.LONG_PRESS, new ge.mymaps.map.events.LongPressDetail(this.lastMouseDownEvent.latlng));
            this.mouseExitHandler();
        }
        public buildRouteTo(lat, lng)
        {
            this.mouseExitHandler(null);
            if (this.routing != null) this._map.removeControl(this.routing);
          //  this._map.removeControl
            this.routing = L['Routing'].control({
                waypoints: [
                    L.latLng(ge.mymaps.map.utils.Locator.instance.lat, ge.mymaps.map.utils.Locator.instance.lng),
                    L.latLng(lat, lng)
                ],
                routeWhileDragging: true
            }).addTo(this._map);
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
            if (this._mainMapLayer) {
                this.baseLayers.removeLayer(this._mainMapLayer);
            
            }
            this._mainMapLayer = layer;
            this.baseLayers.addLayer(this._mainMapLayer);


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