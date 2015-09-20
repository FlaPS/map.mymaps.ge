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
                var Locale = (function (_super) {
                    __extends(Locale, _super);
                    /**
                     * @private
                     */
                    function Locale() {
                        _super.call(this);
                        this._language = Locale.ENGLISH;
                    }
                    Object.defineProperty(Locale, "instance", {
                        /**
                         * Singleton's instance
                         */
                        get: function () {
                            if (Locale._instance == null) {
                                Locale._instance = new Locale();
                            }
                            return Locale._instance;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(Locale.prototype, "language", {
                        get: function () {
                            return this._language;
                        },
                        set: function (value) {
                            this._language = value;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(Locale, "ENGLISH", {
                        get: function () { return 'en'; },
                        enumerable: true,
                        configurable: true
                    });
                    ;
                    Object.defineProperty(Locale, "RUSSIAN", {
                        get: function () { return 'ru'; },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(Locale, "GEORGIAN", {
                        get: function () { return 'ka'; },
                        enumerable: true,
                        configurable: true
                    });
                    return Locale;
                })(ru.flaps.events.EventDispatcher);
                utils.Locale = Locale;
            })(utils = map.utils || (map.utils = {}));
        })(map = mymaps.map || (mymaps.map = {}));
    })(mymaps = ge.mymaps || (ge.mymaps = {}));
})(ge || (ge = {}));
//# sourceMappingURL=Locale.js.map