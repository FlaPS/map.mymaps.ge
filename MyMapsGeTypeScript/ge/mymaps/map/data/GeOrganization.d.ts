declare module ge.mymaps.map.data {
    class GeOrganization extends ge.mymaps.map.data.GeMapObject {
        lat: number;
        lng: number;
        constructor(id?: number, name?: string, lat?: number, lng?: number);
        latLng: L.LatLng;
        private _marker;
        marker: L.Marker;
        distance: number;
        updateMarker(): void;
    }
}
