var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
///<reference path="MarkerMapObject.ts"/>
var ge;
(function (ge) {
    var mymaps;
    (function (mymaps) {
        var map;
        (function (map) {
            var data;
            (function (data) {
                var GeOrganization = (function (_super) {
                    __extends(GeOrganization, _super);
                    function GeOrganization(id, name, lat, lng) {
                        if (id === void 0) { id = -1; }
                        if (name === void 0) { name = ''; }
                        if (lat === void 0) { lat = 0; }
                        if (lng === void 0) { lng = 0; }
                        _super.call(this, lat, lng);
                    }
                    GeOrganization.prototype.updateMarker = function () {
                        _super.prototype.updateMarker.call(this);
                        this.distance = ge.mymaps.map.utils.Locator.instance.getDistanceTo(this.lat, this.lng);
                        this.marker.bindPopup(this.name + ' <br/>distance:' + Math.ceil(this.distance) + ' метров');
                    };
                    return GeOrganization;
                })(ge.mymaps.map.data.MarkerMapObject);
                data.GeOrganization = GeOrganization;
            })(data = map.data || (map.data = {}));
        })(map = mymaps.map || (mymaps.map = {}));
    })(mymaps = ge.mymaps || (ge.mymaps = {}));
})(ge || (ge = {}));
//# sourceMappingURL=GeOrganization.js.map