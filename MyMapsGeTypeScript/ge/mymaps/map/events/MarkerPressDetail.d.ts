declare module ge.mymaps.map.events {
    class MarkerPressDetail extends LongPressDetail {
        mapObject: ge.mymaps.map.data.GeMapObject;
        constructor(latLng: L.LatLng, mapObject: ge.mymaps.map.data.GeMapObject);
    }
}
