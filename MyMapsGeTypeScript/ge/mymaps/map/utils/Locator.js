var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
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
                var Locator = (function (_super) {
                    __extends(Locator, _super);
                    /**
                     * @private
                     */
                    function Locator() {
                        _super.call(this);
                        /**
                         *  instace of google's geocoder
                         */
                        this.geocoder = new google.maps.Geocoder();
                        /**
                         * Geo data based on position
                         */
                        this.lat = 43.1212769;
                        this.lng = 131.8780093;
                        /**
                         * Short adress given by last updateAdress request
                         */
                        this.address = '';
                        /**
                         * Short adress given by last updateAdress request
                         */
                        this.geocoderResult = null;
                        /**
                         * Adress by lat/lng could not be found or loaded
                         */
                        this.faultAddress = true;
                    }
                    Object.defineProperty(Locator, "instance", {
                        /**
                         * Singleton's instance
                         */
                        get: function () {
                            if (Locator._instance == null) {
                                Locator._instance = new Locator();
                            }
                            return Locator._instance;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    /**
                     * Manualy set our current location
                     * @see GEO_LIVE_UPDATE event to handle new lat lng values
                     */
                    Locator.prototype.updateLocation = function (lat, lng) {
                        this.lat = lat;
                        this.lng = lng;
                        this.dispatchEventWith(Locator.GEO_UPDATE);
                        this.updateAdress();
                    };
                    /**
                     * Update current location
                     * @see GEO_LIVE_UPDATE event to handle new lat lng values
                     */
                    Locator.prototype.updateLiveLocation = function () {
                        if (navigator.geolocation) {
                            navigator.geolocation.getCurrentPosition(this.handleLiveLocation.bind(this), function () {
                                this.handleNoGeolocation(true);
                            });
                        }
                        else {
                            // Browser doesn't support Geolocation
                            this.handleNoGeolocation(false);
                        }
                    };
                    /**
                     * Error handler for geolocation
                     */
                    Locator.prototype.handleNoGeolocation = function (errorFlag) {
                        if (errorFlag) {
                            var content = 'Error: The Geolocation service failed.';
                        }
                        else {
                            var content = 'Error: Your browser doesn\'t support geolocation.';
                        }
                        this.lat = NaN;
                        this.lng = NaN;
                        console.log(content);
                    };
                    /**
                     * Locatio handled successfuly
                     */
                    Locator.prototype.handleLiveLocation = function (position) {
                        this.lat = position.coords.latitude;
                        this.lng = position.coords.longitude;
                        console.log("live geo updates " + this.lat + ':' + this.lng);
                        this.dispatchEventWith(Locator.GEO_UPDATE);
                        this.dispatchEventWith(Locator.GEO_LIVE_UPDATE);
                        this.updateAdress();
                    };
                    /**
                     * Request for update adress data about current lat and lng
                     */
                    Locator.prototype.updateAdress = function () {
                        var scopeT = this;
                        $.ajax({
                            url: 'http://maps.googleapis.com/maps/api/geocode/json?latlng=' + this.lat + ',' + this.lng + '&sensor=true',
                            type: 'POST',
                            dataType: 'json',
                            success: scopeT.successHandler.bind(scopeT),
                            error: scopeT.errorHandler.bind(scopeT)
                        });
                    };
                    /**
                     * Geo adress requested success
                     */
                    Locator.prototype.successHandler = function (data) {
                        var geocoderResult = data.results[0];
                        this.faultAddress = false;
                        this.address = geocoderResult.formatted_address;
                        this.geocoderResult = geocoderResult;
                        console.log("address updates " + this.address);
                        this.dispatchEventWith(Locator.ADDRESS_UPDATE);
                    };
                    /**
                     * Handle ADDRESS update error
                     */
                    Locator.prototype.errorHandler = function (xhr, textStatus, errorThrown) {
                        this.faultAddress = true;
                        this.dispatchEventWith(Locator.ADDRESS_ERROR_UPDATE);
                    };
                    /**
                     * Distance to point with lat2, lng2 - to the point of this locator (this.lat, this.lng)
                     */
                    Locator.prototype.getDistanceTo = function (lat2, lng2) {
                        var p1 = this;
                        var p2 = { lat: lat2, lng: lng2 };
                        var R = 6378137; // Earth’s mean radius in meter
                        var dLat = this.rad(p2.lat - p1.lat);
                        var dLong = this.rad(p2.lng - p1.lng);
                        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                            Math.cos(this.rad(p1.lat)) * Math.cos(this.rad(p2.lat)) *
                                Math.sin(dLong / 2) * Math.sin(dLong / 2);
                        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                        var d = R * c;
                        return d; // returns the distance in meter
                    };
                    /**
                     * @private - get radians from degrees
                     */
                    Locator.prototype.rad = function (x) {
                        return x * Math.PI / 180;
                    };
                    ///***** EVENTS  
                    /**
                     * Adress was updated with google geocoder
                     */
                    Locator.ADDRESS_UPDATE = "adressUpdate";
                    /**
                     * Error of adress update
                     */
                    Locator.ADDRESS_ERROR_UPDATE = "adressErrorUpdate";
                    /**
                     * Geo position was updated manualy or by incapsulated location module of browser
                     */
                    Locator.GEO_UPDATE = "geoUpdate";
                    /**
                     * Geo loation was updated according to browsers data
                     */
                    Locator.GEO_LIVE_UPDATE = "geoLiveUpdate";
                    /**
                     * Geo location update failed. Location uknown lat = NaN; lng = NaN;
                     */
                    Locator.GEO_ERROR_UPDATE = "geoErrorUpdate";
                    return Locator;
                })(ru.flaps.events.EventDispatcher);
                utils.Locator = Locator;
            })(utils = map.utils || (map.utils = {}));
        })(map = mymaps.map || (mymaps.map = {}));
    })(mymaps = ge.mymaps || (ge.mymaps = {}));
})(ge || (ge = {}));
//# sourceMappingURL=Locator.js.map