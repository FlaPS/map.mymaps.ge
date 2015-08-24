module ge.mymaps.map.utils {
    /**
     * basic functionality for user location depending functions.
     * This class is a singleton
     * Use ge.mymaps.map.utils.Locator.instacne for event listening and method closures
     * ei. ge.mymaps.map.utils.Locator.instacne.updateLocation();
     * ge.mymaps.map.utils.Locator.instacne.addEventListener(ge.mymaps.map.utils.Locator.GEO_UPDATE, geoUpdateEvetHandler
     */
    export class Locator extends ru.flaps.events.EventDispatcher {

        /**
         * Singleton's instance
         */
        public static get instance(): ge.mymaps.map.utils.Locator {
            if (Locator._instance == null) { Locator._instance = new Locator(); }
            return Locator._instance;
        }


        /** 
         * @private
         */
        private static _instance: Locator;


        /** 
         * @private
         */
        constructor() {
            super();
        }



        ///***** EVENTS  



        /**
         * Adress was updated with google geocoder
         */
        public static ADDRESS_UPDATE: string = "adressUpdate";


        /** 
         * Error of adress update
         */
        public static ADDRESS_ERROR_UPDATE: string = "adressErrorUpdate";


        /**
         * Geo position was updated manualy or by incapsulated location module of browser 
         */
        public static GEO_UPDATE: string = "geoUpdate";


        /**
         * Geo loation was updated according to browsers data
         */
        public static GEO_LIVE_UPDATE: string = "geoLiveUpdate";


        /**
         * Geo location update failed. Location uknown lat = NaN; lng = NaN;
         */
        public static GEO_ERROR_UPDATE: string = "geoErrorUpdate";


        /**
         *  instace of google's geocoder
         */
        public geocoder: google.maps.Geocoder = new google.maps.Geocoder();

        /**
         * Manualy set our current location
         * @see GEO_LIVE_UPDATE event to handle new lat lng values
         */
        public updateLocation(lat: number, lng: number): void {
            this.lat = lat;
            this.lng = lng;
            this.dispatchEventWith(Locator.GEO_UPDATE);
            this.updateAdress();
        }

        /**
         * Update current location
         * @see GEO_LIVE_UPDATE event to handle new lat lng values
         */
        public updateLiveLocation(): void {
          
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(this.handleLiveLocation.bind(this), function () {
                    this.handleNoGeolocation(true);
                });
            } else {
                // Browser doesn't support Geolocation
                this.handleNoGeolocation(false);
            }
        }


        /**
         * Error handler for geolocation
         */
        private handleNoGeolocation(errorFlag) {
            if (errorFlag) {
                var content = 'Error: The Geolocation service failed.';
            } else {
                var content = 'Error: Your browser doesn\'t support geolocation.';
            }
            this.lat = NaN;
            this.lng = NaN;
            console.log(content);
        }   

        /**
         * Locatio handled successfuly
         */
        private handleLiveLocation(position): void {

            this.lat = position.coords.latitude;
            this.lng = position.coords.longitude;
            console.log("live geo updates " + this.lat + ':' + this.lng);
            this.dispatchEventWith(Locator.GEO_UPDATE);
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
         * Request for update adress data about current lat and lng
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

        /**
         * Distance to point with lat2, lng2 - to the point of this locator (this.lat, this.lng)
         */
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


        /**
         * @private - get radians from degrees
         */
        private rad(x) {
            return x * Math.PI / 180;
        }
    }
 
    
}