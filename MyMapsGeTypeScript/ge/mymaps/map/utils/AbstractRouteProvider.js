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
                var AbstractRouteProvider = (function (_super) {
                    __extends(AbstractRouteProvider, _super);
                    function AbstractRouteProvider() {
                        _super.apply(this, arguments);
                    }
                    Object.defineProperty(AbstractRouteProvider, "COMPLETE", {
                        get: function () { return 'complete'; },
                        enumerable: true,
                        configurable: true
                    });
                    ;
                    Object.defineProperty(AbstractRouteProvider, "ERROR", {
                        get: function () { return 'error'; },
                        enumerable: true,
                        configurable: true
                    });
                    ;
                    return AbstractRouteProvider;
                })(ru.flaps.events.EventDispatcher);
                utils.AbstractRouteProvider = AbstractRouteProvider;
            })(utils = map.utils || (map.utils = {}));
        })(map = mymaps.map || (mymaps.map = {}));
    })(mymaps = ge.mymaps || (ge.mymaps = {}));
})(ge || (ge = {}));
//# sourceMappingURL=AbstractRouteProvider.js.map