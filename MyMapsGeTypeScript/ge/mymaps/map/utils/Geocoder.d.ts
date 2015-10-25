/// <reference path="../../../../Scripts/typings/jquery/jquery.d.ts" />
declare module ge.mymaps.map.utils {
    /**
     * basic functionality for user location depending functions.
     * This class is a singleton
     * Use ge.mymaps.map.utils.Locator.instacne for event listening and method closures
     * ei. ge.mymaps.map.utils.Locator.instacne.updateLocation();
     * ge.mymaps.map.utils.Locator.instacne.addEventListener(ge.mymaps.map.utils.Locator.GEO_UPDATE, geoUpdateEvetHandler
     
    */
    class Geocoder extends ru.flaps.events.EventDispatcher {
        static lang: string;
        /**
         *
         * Public static
         */
        static UPDATE: string;
        static ERROR_UPDATE: string;
        constructor(latLng: L.LatLng);
        private _googleResult;
        /**
         * Google result raw JSON
         */
        googleResult: google.maps.GeocoderResult;
        private _googleAddress;
        googleAddress: string;
        private _latLng;
        latLng: L.LatLng;
        /**
        * Short adress given by last updateAdress request
        */
        address: string;
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
    }
}
