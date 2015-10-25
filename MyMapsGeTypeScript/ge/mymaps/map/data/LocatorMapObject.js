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
                /**
                 * basic functionality for user location depending functions.
                 * This class is a singleton
                 * Use ge.mymaps.map.utils.Locator.instacne for event listening and method closures
                 * ei. ge.mymaps.map.utils.Locator.instacne.updateLocation();
                 * ge.mymaps.map.utils.Locator.instacne.addEventListener(ge.mymaps.map.utils.Locator.GEO_UPDATE, geoUpdateEvetHandler
                 */
                var LocatorMapObject = (function (_super) {
                    __extends(LocatorMapObject, _super);
                    function LocatorMapObject(lat, lng) {
                        if (lat === void 0) { lat = 0; }
                        if (lng === void 0) { lng = 0; }
                        _super.call(this, lat, lng);
                        this.iconUrl = "http://www.primehomes.lk/images/map_man.gif";
                        this.iconRetinaUrl = "http://www.primehomes.lk/images/map_man.gif";
                        this.marker.on('add', this.addHandler.bind(this));
                    }
                    LocatorMapObject.prototype.addHandler = function (e) {
                        this.marker.dragging.enable();
                    };
                    return LocatorMapObject;
                })(ge.mymaps.map.data.MarkerMapObject);
                data.LocatorMapObject = LocatorMapObject;
            })(data = map.data || (map.data = {}));
        })(map = mymaps.map || (mymaps.map = {}));
    })(mymaps = ge.mymaps || (ge.mymaps = {}));
})(ge || (ge = {}));
//# sourceMappingURL=LocatorMapObject.js.map