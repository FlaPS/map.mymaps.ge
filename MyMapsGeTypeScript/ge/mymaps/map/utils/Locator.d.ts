declare module ge.mymaps.map.utils {
    /**
     * basic functionality for user location depending functions.
     * This class is a singleton
     * Use ge.mymaps.map.utils.Locator.instacne for event listening and method closures
     * ei. ge.mymaps.map.utils.Locator.instacne.updateLocation();
     * ge.mymaps.map.utils.Locator.instacne.addEventListener(ge.mymaps.map.utils.Locator.GEO_UPDATE, geoUpdateEvetHandler
     */
    class Locator extends ru.flaps.events.EventDispatcher {
        /**
         * Singleton's instance
         */
        static instance: ge.mymaps.map.utils.Locator;
        /**
         * @private
         */
        private static _instance;
        /**
         * @private
         */
        constructor();
        /**
         * Adress was updated with google geocoder
         */
        static ADDRESS_UPDATE: string;
        /**
         * Error of adress update
         */
        static ADDRESS_ERROR_UPDATE: string;
        /**
         * Geo position was updated manualy or by incapsulated location module of browser
         */
        static GEO_UPDATE: string;
        /**
         * Geo loation was updated according to browsers data
         */
        static GEO_LIVE_UPDATE: string;
        /**
         * Geo location update failed. Location uknown lat = NaN; lng = NaN;
         */
        static GEO_ERROR_UPDATE: string;
        /**
         *  instace of google's geocoder
         */
        geocoder: google.maps.Geocoder;
        /**
         * Manualy set our current location
         * @see GEO_LIVE_UPDATE event to handle new lat lng values
         */
        updateLocation(lat: number, lng: number): void;
        /**
         * Update current location
         * @see GEO_LIVE_UPDATE event to handle new lat lng values
         */
        updateLiveLocation(): void;
        /**
         * Error handler for geolocation
         */
        private handleNoGeolocation(errorFlag);
        /**
         * Locatio handled successfuly
         */
        private handleLiveLocation(position);
        /**
         * Geo data based on position
         */
        lat: number;
        lng: number;
        /**
         * Short adress given by last updateAdress request
         */
        address: string;
        /**
         * Short adress given by last updateAdress request
         */
        geocoderResult: google.maps.GeocoderResult;
        /**
         * Adress by lat/lng could not be found or loaded
         */
        faultAddress: boolean;
        /**
         * Request for update adress data about current lat and lng
         */
        updateAdress(): void;
        /**
         * Geo adress requested success
         */
        private successHandler(data);
        /**
         * Handle ADDRESS update error
         */
        private errorHandler(xhr, textStatus, errorThrown);
        /**
         * Distance to point with lat2, lng2 - to the point of this locator (this.lat, this.lng)
         */
        getDistanceTo(lat2: number, lng2: number): number;
        /**
         * @private - get radians from degrees
         */
        private rad(x);
    }
}
