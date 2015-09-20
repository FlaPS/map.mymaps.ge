var ge;
(function (ge) {
    var mymaps;
    (function (mymaps) {
        var map;
        (function (map) {
            var core;
            (function (core) {
                var LatLng = (function () {
                    function LatLng(lat, lng) {
                        this.lat = lat;
                        this.lng = lng;
                        this._lLatLng = L.latLng(lat, lng);
                    }
                    /**
                     * Distance to other LatLng
                     */
                    LatLng.prototype.distanceTo = function (other) {
                        return this._lLatLng.distanceTo(other);
                    };
                    /**
                     *Are this points equals?
                     */
                    LatLng.prototype.equals = function (other) {
                        return this._lLatLng.equals(other);
                    };
                    /**
                     * Wrap this point
                     */
                    LatLng.prototype.wrap = function (lat, lng) {
                        var l = this._lLatLng.wrap(lat, lng);
                        return new LatLng(l.lat, l.lng);
                    };
                    return LatLng;
                })();
                core.LatLng = LatLng;
            })(core = map.core || (map.core = {}));
        })(map = mymaps.map || (mymaps.map = {}));
    })(mymaps = ge.mymaps || (ge.mymaps = {}));
})(ge || (ge = {}));
//# sourceMappingURL=LatLng.js.map