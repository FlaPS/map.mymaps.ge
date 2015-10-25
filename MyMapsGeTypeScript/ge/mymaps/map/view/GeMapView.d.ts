/// <reference path="../../../../ru/flaps/uihelpers/RoundProgress.d.ts" />
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
        static MARKER_PRESS: string;
        /**
         * Event constant
         * CustomEvent.detailt: L.LatLng  - object;s coordiates for fired event
         * @see L.LatLng  http://leafletjs.com/reference.html#latlng
         */
        static MAP_TYPE_CHANGED: string;
        /**
         * Zoom of the map was changed
         */
        static ZOOM_CHANGED: string;
        /**
         * Center of map view was changed
         */
        static CENTER_CHANGED: string;
        private _map;
        leafletMap: L.Map;
        private _layers;
        private _roundDiv;
        private _roundProgress;
        attached(): void;
        private _locateControl;
        private _zoomControl;
        private baseLayers;
        private clickGroup;
        private list;
        initialize(): void;
        private _centerLatLng;
        centerLatLng: L.LatLng;
        private dragEndHandler(e);
        private markerClickHandler(e);
        markerCluster: any;
        private baseLayerMouseOverBind;
        private baseLayerMouseOutBind;
        private baseLayerMouseOverHandler(e);
        private baseLayerMouseOutHandler(e);
        private mouseDownBind;
        private mouseExitBind;
        private longPressTimeout;
        private lastMouseDownEvent;
        private prevTween;
        private mouseDownHandler(e);
        private mouseExitHandler(e?);
        private routing;
        private dispatchLongPress();
        buildRouteTo(lat: any, lng: any): void;
        private zoomendHandler(e);
        private geoManager;
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
        maxZoom: number;
        minZoom: number;
        private _zoom;
        zoom: number;
        private _showMapUI;
        showMapsUI: boolean;
        showMapUI: boolean;
    }
}
