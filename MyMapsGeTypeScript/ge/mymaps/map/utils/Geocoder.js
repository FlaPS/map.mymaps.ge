var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
///<reference path="..\..\..\..\Scripts\typings\jquery\jquery.d.ts"/>
var ge;
(function (ge) {
    var mymaps;
    (function (mymaps) {
        var map;
        (function (map) {
            var utils;
            (function (utils) {
                /**
                 * basic functionality for user location depending functions.
                 * This class is a singleton
                 * Use ge.mymaps.map.utils.Locator.instacne for event listening and method closures
                 * ei. ge.mymaps.map.utils.Locator.instacne.updateLocation();
                 * ge.mymaps.map.utils.Locator.instacne.addEventListener(ge.mymaps.map.utils.Locator.GEO_UPDATE, geoUpdateEvetHandler
                 
                */
                var Geocoder = (function (_super) {
                    __extends(Geocoder, _super);
                    function Geocoder(latLng) {
                        _super.call(this);
                        /**
                        * Short adress given by last updateAdress request
                        */
                        this.address = '';
                        /**
                         * Adress by lat/lng could not be found or loaded
                         */
                        this.faultAddress = true;
                        this._latLng = latLng;
                        this.updateAdress();
                    }
                    Object.defineProperty(Geocoder, "UPDATE", {
                        /**
                         *
                         * Public static
                         */
                        get: function () { return 'UPDATE'; },
                        enumerable: true,
                        configurable: true
                    });
                    ;
                    Object.defineProperty(Geocoder, "ERROR_UPDATE", {
                        get: function () { return 'ERROR_UPDATE'; },
                        enumerable: true,
                        configurable: true
                    });
                    ;
                    Object.defineProperty(Geocoder.prototype, "googleResult", {
                        /**
                         * Google result raw JSON
                         */
                        get: function () {
                            return this._googleResult;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(Geocoder.prototype, "googleAddress", {
                        get: function () {
                            return this._googleAddress;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(Geocoder.prototype, "latLng", {
                        get: function () {
                            return this._latLng;
                        },
                        set: function (value) {
                            this._latLng = value;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    /**
                     * Request for update adress data about current lat and lng
                     */
                    Geocoder.prototype.updateAdress = function () {
                        $.ajax({
                            url: 'http://maps.googleapis.com/maps/api/geocode/json?latlng=' + this.latLng.lat + ',' + this.latLng.lng + '&sensor=true&language=' + ge.mymaps.map.utils.Locale.instance.language,
                            type: 'POST',
                            dataType: 'json',
                            success: this.successHandler.bind(this),
                            error: this.errorHandler.bind(this)
                        });
                    };
                    /**
                     * Geo adress requested success
                     */
                    Geocoder.prototype.successHandler = function (data) {
                        this._googleResult = data.results[0];
                        this.faultAddress = false;
                        if (this._googleResult.formatted_address)
                            this._googleAddress = this._googleResult.formatted_address;
                        else
                            this._googleAddress = this._googleResult.address_components.join(';');
                        console.log("address updates " + this.googleAddress);
                        this.dispatchEventWith(Geocoder.UPDATE);
                    };
                    /**
                     * Handle ADDRESS update error
                     */
                    Geocoder.prototype.errorHandler = function (xhr, textStatus, errorThrown) {
                        this.faultAddress = true;
                        this.dispatchEventWith(Geocoder.ERROR_UPDATE);
                    };
                    return Geocoder;
                })(ru.flaps.events.EventDispatcher);
                utils.Geocoder = Geocoder;
            })(utils = map.utils || (map.utils = {}));
        })(map = mymaps.map || (mymaps.map = {}));
    })(mymaps = ge.mymaps || (ge.mymaps = {}));
})(ge || (ge = {}));
//# sourceMappingURL=Geocoder.js.map