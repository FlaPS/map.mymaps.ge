declare module ge.mymaps.map.events {
    class LongPressDetail {
        latLng: L.LatLng;
        geocoder: ge.mymaps.map.utils.Geocoder;
        constructor(latLng: L.LatLng);
    }
}
