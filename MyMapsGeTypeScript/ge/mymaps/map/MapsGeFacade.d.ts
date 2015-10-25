/// <reference path="utils/Locator.d.ts" />
/// <reference path="data/LocatorMapObject.d.ts" />
declare module ge.mymaps.map {
    class MapsGeFacade extends polymer.Base implements polymer.Element {
        /**
         * Entrie map ready event. Use one to hide default UI and set initial layers
         * @see L.LatLng      http://leafletjs.com/reference.html#latlng
         */
        static READY: string;
        organizations: Array<ge.mymaps.map.data.GeOrganization>;
        private _mapView;
        attached(): void;
        private gmLoadedHandler();
        mapView: ge.mymaps.map.view.GeMapView;
        geoLiveUpdateHandler(): void;
        private _markerCluster;
        locator: ge.mymaps.map.utils.Locator;
        addOrganization(obj: ge.mymaps.map.data.GeOrganization): ge.mymaps.map.data.GeOrganization;
        removeOrganization(obj: ge.mymaps.map.data.GeOrganization): ge.mymaps.map.data.GeOrganization;
        clearOrganizations(): void;
        private _showMapUI;
        showMapUI: boolean;
        private locatorMarker;
        moveToLocation(): void;
        private moveMapToGeoLiveUpdateHandler(e);
    }
}
