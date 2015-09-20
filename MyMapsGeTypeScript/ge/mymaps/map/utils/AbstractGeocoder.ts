///<reference path="..\..\..\..\Scripts\typings\jquery\jquery.d.ts"/>
module ge.mymaps.map.utils {
    /**
     * basic functionality for user location depending functions.
     * This class is a singleton
     * Use ge.mymaps.map.utils.Locator.instacne for event listening and method closures
     * ei. ge.mymaps.map.utils.Locator.instacne.updateLocation();
     * ge.mymaps.map.utils.Locator.instacne.addEventListener(ge.mymaps.map.utils.Locator.GEO_UPDATE, geoUpdateEvetHandler
     
    */

    export abstract class AbstractGeocoder extends ru.flaps.events.EventDispatcher {
        public static lang: string;
        /**
         *
         * Public static
         */

        public static get UPDATE(): string { return 'UPDATE' };
        public static get ERROR_UPDATE(): string { return 'ERROR_UPDATE' };


        private _latLng: L.LatLng;

        public set latLng(value: L.LatLng) {
            this._latLng = value;
        }

        public get latLng(): L.LatLng {
            return this._latLng;
        }


        constructor(latLng: L.LatLng) {
            super();
            this._latLng = latLng;
            this.updateAdress();
        }

        public abstract updateAdress(): any
    }
}
        