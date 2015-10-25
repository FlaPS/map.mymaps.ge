/// <reference path="../../../../Scripts/typings/jquery/jquery.d.ts" />
declare module ge.mymaps.map.utils {
    /**
     * basic functionality for user location depending functions.
     * This class is a singleton
     * Use ge.mymaps.map.utils.Locator.instacne for event listening and method closures
     * ei. ge.mymaps.map.utils.Locator.instacne.updateLocation();
     * ge.mymaps.map.utils.Locator.instacne.addEventListener(ge.mymaps.map.utils.Locator.GEO_UPDATE, geoUpdateEvetHandler
     
    */
    abstract class AbstractGeocoder extends ru.flaps.events.EventDispatcher {
        static lang: string;
        /**
         *
         * Public static
         */
        static UPDATE: string;
        static ERROR_UPDATE: string;
        private _latLng;
        latLng: L.LatLng;
        constructor(latLng: L.LatLng);
        abstract updateAdress(): any;
    }
}
