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
            var utils;
            (function (utils) {
                var GoogleRouteProvider = (function (_super) {
                    __extends(GoogleRouteProvider, _super);
                    function GoogleRouteProvider() {
                        _super.apply(this, arguments);
                    }
                    return GoogleRouteProvider;
                })(ge.mymaps.map.utils.AbstractRouteProvider);
                utils.GoogleRouteProvider = GoogleRouteProvider;
            })(utils = map.utils || (map.utils = {}));
        })(map = mymaps.map || (mymaps.map = {}));
    })(mymaps = ge.mymaps || (ge.mymaps = {}));
})(ge || (ge = {}));
//# sourceMappingURL=GoogleRouteProvider.js.map