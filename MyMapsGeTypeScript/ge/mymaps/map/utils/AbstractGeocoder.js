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
                var AbstractGeocoder = (function (_super) {
                    __extends(AbstractGeocoder, _super);
                    function AbstractGeocoder(latLng) {
                        _super.call(this);
                        this._latLng = latLng;
                        this.updateAdress();
                    }
                    Object.defineProperty(AbstractGeocoder, "UPDATE", {
                        /**
                         *
                         * Public static
                         */
                        get: function () { return 'UPDATE'; },
                        enumerable: true,
                        configurable: true
                    });
                    ;
                    Object.defineProperty(AbstractGeocoder, "ERROR_UPDATE", {
                        get: function () { return 'ERROR_UPDATE'; },
                        enumerable: true,
                        configurable: true
                    });
                    ;
                    Object.defineProperty(AbstractGeocoder.prototype, "latLng", {
                        get: function () {
                            return this._latLng;
                        },
                        set: function (value) {
                            this._latLng = value;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    return AbstractGeocoder;
                })(ru.flaps.events.EventDispatcher);
                utils.AbstractGeocoder = AbstractGeocoder;
            })(utils = map.utils || (map.utils = {}));
        })(map = mymaps.map || (mymaps.map = {}));
    })(mymaps = ge.mymaps || (ge.mymaps = {}));
})(ge || (ge = {}));
//# sourceMappingURL=AbstractGeocoder.js.map