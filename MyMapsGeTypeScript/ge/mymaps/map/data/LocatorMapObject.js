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
            var layers;
            (function (layers) {
                /**
                 * basic functionality for user location depending functions.
                 * This class is a singleton
                 * Use ge.mymaps.map.utils.Locator.instacne for event listening and method closures
                 * ei. ge.mymaps.map.utils.Locator.instacne.updateLocation();
                 * ge.mymaps.map.utils.Locator.instacne.addEventListener(ge.mymaps.map.utils.Locator.GEO_UPDATE, geoUpdateEvetHandler
                 */
                var LocatorMarker = (function (_super) {
                    __extends(LocatorMarker, _super);
                    function LocatorMarker() {
                        _super.apply(this, arguments);
                    }
                    return LocatorMarker;
                })(ge.mymaps.map.data.GeMapObject);
                layers.LocatorMarker = LocatorMarker;
            })(layers = map.layers || (map.layers = {}));
        })(map = mymaps.map || (mymaps.map = {}));
    })(mymaps = ge.mymaps || (ge.mymaps = {}));
})(ge || (ge = {}));
//# sourceMappingURL=LocatorMapObject.js.map