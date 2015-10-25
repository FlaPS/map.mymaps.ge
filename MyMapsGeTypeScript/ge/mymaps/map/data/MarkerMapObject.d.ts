declare module ge.mymaps.map.data {
    class MarkerMapObject extends ge.mymaps.map.data.GeMapObject {
        lat: number;
        lng: number;
        constructor(lat?: number, lng?: number);
        latLng: L.LatLng;
        private _marker;
        marker: L.Marker;
        iconUrl: string;
        iconRetinaUrl: string;
        updateMarker(): void;
    }
}
