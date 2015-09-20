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
            var controllers;
            (function (controllers) {
                var LocatorController = (function (_super) {
                    __extends(LocatorController, _super);
                    /**
                     * @private
                     */
                    function LocatorController() {
                        _super.call(this);
                    }
                    Object.defineProperty(LocatorController, "instance", {
                        /**
                         * Singleton's instance
                         */
                        get: function () {
                            if (LocatorController._instance == null) {
                                LocatorController._instance = new LocatorController();
                            }
                            return LocatorController._instance;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    return LocatorController;
                })(ru.flaps.events.EventDispatcher);
                controllers.LocatorController = LocatorController;
            })(controllers = map.controllers || (map.controllers = {}));
        })(map = mymaps.map || (mymaps.map = {}));
    })(mymaps = ge.mymaps || (ge.mymaps = {}));
})(ge || (ge = {}));
//# sourceMappingURL=LocatorController.js.map