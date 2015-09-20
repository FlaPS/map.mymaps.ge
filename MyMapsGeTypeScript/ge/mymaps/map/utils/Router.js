var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
///<reference path="../../../../ru/flaps/events/EventDispatcher.ts"/>
var ge;
(function (ge) {
    var mymaps;
    (function (mymaps) {
        var map;
        (function (map) {
            var utils;
            (function (utils) {
                /***
                 * MyMpas ge router service
                 *
                 */
                var Router = (function (_super) {
                    __extends(Router, _super);
                    function Router() {
                        _super.call(this);
                    }
                    Object.defineProperty(Router, "START_CHANGED", {
                        get: function () { return 'START_CHANGED'; },
                        enumerable: true,
                        configurable: true
                    });
                    ;
                    Object.defineProperty(Router, "END_CHANGED", {
                        get: function () { return 'END_CHANGED'; },
                        enumerable: true,
                        configurable: true
                    });
                    ;
                    Object.defineProperty(Router, "CALCULATED", {
                        get: function () { return 'calculated'; },
                        enumerable: true,
                        configurable: true
                    });
                    ;
                    Object.defineProperty(Router.prototype, "start", {
                        get: function () {
                            return this._start;
                        },
                        /**
                         *
                         * Set start point of the router
                         */
                        set: function (value) {
                            this._start = value;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(Router.prototype, "end", {
                        get: function () {
                            return this._start;
                        },
                        /**
                         *
                         * Set end point of the router
                         */
                        set: function (value) {
                            this._start = value;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    /**
                     *
                     * Available to build route path
                     */
                    Router.prototype.isAvailable = function () {
                        return this.start != null && this.end != null;
                    };
                    Router.prototype.calculate = function () {
                    };
                    return Router;
                })(ru.flaps.events.EventDispatcher);
                utils.Router = Router;
            })(utils = map.utils || (map.utils = {}));
        })(map = mymaps.map || (mymaps.map = {}));
    })(mymaps = ge.mymaps || (ge.mymaps = {}));
})(ge || (ge = {}));
//# sourceMappingURL=Router.js.map