var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ge;
(function (ge) {
    var mymaps;
    (function (mymaps) {
        var map;
        (function (map) {
            var data;
            (function (data) {
                var MarkerMapObject = (function (_super) {
                    __extends(MarkerMapObject, _super);
                    function MarkerMapObject(lat, lng) {
                        if (lat === void 0) { lat = 0; }
                        if (lng === void 0) { lng = 0; }
                        _super.call(this);
                        this.lat = lat;
                        this.lng = lng;
                        this.latLng = L.latLng(lat, lng);
                        this._marker = L.marker(this.latLng);
                        this.updateMarker();
                    }
                    Object.defineProperty(MarkerMapObject.prototype, "marker", {
                        get: function () {
                            return this._marker;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    MarkerMapObject.prototype.updateMarker = function () {
                        this._marker.setLatLng(this.latLng);
                        //  var icon: L.Icon
                        this._marker.setIcon(new L.Icon.Default());
                        //  this._marker.setIcon();
                        this._marker.update();
                    };
                    return MarkerMapObject;
                })(ge.mymaps.map.data.GeMapObject);
                data.MarkerMapObject = MarkerMapObject;
            })(data = map.data || (map.data = {}));
        })(map = mymaps.map || (mymaps.map = {}));
    })(mymaps = ge.mymaps || (ge.mymaps = {}));
})(ge || (ge = {}));
//# sourceMappingURL=MarkerMapObject.js.map