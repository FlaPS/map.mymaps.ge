module ge.mymaps.map.utils {
    export class Locator extends ru.flaps.events.EventDispatcher {


        public static get instance(): ge.mymaps.map.utils.Locator {
            if (Locator._instance == null) { Locator._instance = new Locator(); }
            return Locator._instance;
        }

        private static _instance: Locator;
        constructor() {
            super();

        }
        public static ADDRESS_UPDATE: string = "adressUpdate";
        public static ADDRESS_ERROR_UPDATE: string = "adressErrorUpdate";
        public static GEO_UPDATE: string = "geoUpdate";
        public static GEO_LIVE_UPDATE: string = "geoLiveUpdate";
        public static GEO_ERROR_UPDATE: string = "geoErrorUpdate";

        public geocoder: google.maps.Geocoder = new google.maps.Geocoder();

        public updateLocation(lat: number, lng: number): void {
            this.lat = lat;
            this.lng = lng;
            this.dispatchEventWith(Locator.GEO_UPDATE);
            this.updateAdress();
        }
        public updateLiveLocation(): void {
            function handleNoGeolocation(errorFlag) {
                if (errorFlag) {
                    var content = 'Error: The Geolocation service failed.';
                } else {
                    var content = 'Error: Your browser doesn\'t support geolocation.';
                }

                console.log(content);
            }
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(this.handleLiveLocation.bind(this), function () {
                    handleNoGeolocation(true);
                });
            } else {
                // Browser doesn't support Geolocation
                handleNoGeolocation(false);
            }



        }

        private handleLiveLocation(position): void {

            this.lat = position.coords.latitude;
            this.lng = position.coords.longitude;
            console.log("live geo updates " + this.lat + ':' + this.lng);
            //this.dispatchEventWith(LimeGeoData.GEO_UPDATE);
            this.dispatchEventWith(Locator.GEO_LIVE_UPDATE);
            this.updateAdress();
        }

        /**
         * Geo data based on position
         */
        public lat: number = 43.1212769;
        public lng: number = 131.8780093;



        /**
         * Short adress given by last updateAdress request
         */
        public address: string = '';


        /**
         * Short adress given by last updateAdress request
         */
        public geocoderResult: google.maps.GeocoderResult = null;

        /**
         * Adress by lat/lng could not be found or loaded
         */
        public faultAddress: boolean = true;


        /**
         * Request for update adress data about lat and lng
         */
        public updateAdress(): void {
            var scopeT: Locator = this;
            $.ajax({
                url: 'http://maps.googleapis.com/maps/api/geocode/json?latlng=' + this.lat + ',' + this.lng + '&sensor=true',
                type: 'POST',
                dataType: 'json',
                success: scopeT.successHandler.bind(scopeT),
                error: scopeT.errorHandler.bind(scopeT)

            });
        }

        /**
         * Geo adress requested success
         */
        private successHandler(data): void {

            var geocoderResult: google.maps.GeocoderResult = data.results[0];
            this.faultAddress = false;
            this.address = geocoderResult.formatted_address;
            this.geocoderResult = geocoderResult;
            console.log("address updates " + this.address);
            this.dispatchEventWith(Locator.ADDRESS_UPDATE);
        }

        /**
         * Handle ADDRESS update error
         */
        private errorHandler(xhr, textStatus, errorThrown) {
            this.faultAddress = true;
            this.dispatchEventWith(Locator.ADDRESS_ERROR_UPDATE);
        }

        public getDistanceTo(lat2: number, lng2: number): number {
            var p1: any = this;
            var p2: any = { lat: lat2, lng: lng2 }
            var R = 6378137; // Earth’s mean radius in meter
            var dLat = this.rad(p2.lat - p1.lat);
            var dLong = this.rad(p2.lng - p1.lng);
            var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(this.rad(p1.lat)) * Math.cos(this.rad(p2.lat)) *
                Math.sin(dLong / 2) * Math.sin(dLong / 2);
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            var d = R * c;
            return d; // returns the distance in meter
        }

        private rad(x) {
            return x * Math.PI / 180;
        }
    }
 
    
}