///<reference path="..\..\..\..\Scripts\typings\jquery\jquery.d.ts"/>
module ge.mymaps.map.utils {
    /**
     * basic functionality for user location depending functions.
     * This class is a singleton
     * Use ge.mymaps.map.utils.Locator.instacne for event listening and method closures
     * ei. ge.mymaps.map.utils.Locator.instacne.updateLocation();
     * ge.mymaps.map.utils.Locator.instacne.addEventListener(ge.mymaps.map.utils.Locator.GEO_UPDATE, geoUpdateEvetHandler
     
    */

    export class Geocoder extends ru.flaps.events.EventDispatcher {
        


        public static lang: string;
        /**
         *
         * Public static
         */

        public static get UPDATE():string { return 'UPDATE'};
        public static get ERROR_UPDATE():string { return 'ERROR_UPDATE'};
        

        constructor(latLng: L.LatLng) {
            super();
            this._latLng = latLng;
            this.updateAdress();      
        }

        private _googleResult: google.maps.GeocoderResult
        /**
         * Google result raw JSON
         */
        public get googleResult(): google.maps.GeocoderResult{
             return this._googleResult;

         }






         private _googleAddress:string;

         public get googleAddress():string
         {
             return this._googleAddress;
         }



         private _latLng: L.LatLng; 

         public set latLng(value:L.LatLng)
         {
             this._latLng = value;
         }

         public get latLng(): L.LatLng {
             return this._latLng;
         }





         /**
         * Short adress given by last updateAdress request
         */
         public address: string = '';


         
         /**
          * Adress by lat/lng could not be found or loaded
          */
         public faultAddress: boolean = true;


         /**
          * Request for update adress data about current lat and lng
          */
         public updateAdress(): void {

             $.ajax({
                 url: 'http://maps.googleapis.com/maps/api/geocode/json?latlng=' + this.latLng.lat + ',' + this.latLng.lng + '&sensor=true&language=' + ge.mymaps.map.utils.Locale.instance.language,
                 type: 'POST',
                 dataType: 'json',
                 success: this.successHandler.bind(this),
                 error: this.errorHandler.bind(this)

             });
         }

         /**
          * Geo adress requested success
          */
         private successHandler(data): void {

             this._googleResult =  data.results[0];


             this.faultAddress = false;
             if (this._googleResult.formatted_address)
                 this._googleAddress = this._googleResult.formatted_address
             else
                 this._googleAddress = this._googleResult.address_components.join(';');
             console.log("address updates " + this.googleAddress);
             this.dispatchEventWith(Geocoder.UPDATE);
         }

         /**
          * Handle ADDRESS update error
          */
         private errorHandler(xhr, textStatus, errorThrown) {
             this.faultAddress = true;
             this.dispatchEventWith(Geocoder.ERROR_UPDATE);
         }
    }
}