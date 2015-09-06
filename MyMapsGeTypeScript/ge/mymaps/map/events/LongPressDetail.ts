module ge.mymaps.map.events {
    export class LongPressDetail {

        public latLng: L.LatLng;


        public geocoder: ge.mymaps.map.utils.Geocoder;

        constructor(latLng: L.LatLng)
        {
            this.latLng = latLng;
            this.geocoder = new ge.mymaps.map.utils.Geocoder(this.latLng);
        }
    }
}