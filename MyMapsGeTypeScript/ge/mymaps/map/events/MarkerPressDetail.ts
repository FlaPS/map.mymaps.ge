module ge.mymaps.map.events {
    export class MarkerPressDetail extends LongPressDetail {

        public mapObject: ge.mymaps.map.data.GeMapObject;
        constructor(latLng: L.LatLng, mapObject: ge.mymaps.map.data.GeMapObject) {
            super(latLng);
            this.mapObject = mapObject;
//this.geocoder = new ge.mymaps.map.utils.Geocoder(this.latLng);
        }
    }
}