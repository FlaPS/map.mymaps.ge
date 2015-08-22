var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BaseTassController = (function (_super) {
    __extends(BaseTassController, _super);
    function BaseTassController() {
        _super.apply(this, arguments);
        this._isRunning = false;
    }
    Object.defineProperty(BaseTassController.prototype, "context", {
        get: function () { return TassAppContext.instance; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseTassController.prototype, "view", {
        get: function () {
            return this._view;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseTassController.prototype, "model", {
        get: function () {
            return this._model;
        },
        enumerable: true,
        configurable: true
    });
    BaseTassController.prototype.setUp = function (view, model) {
        this._view = view;
        this._model = model;
    };
    BaseTassController.prototype.start = function () {
        this._isRunning = true;
        this.view.visible = true;
    };
    BaseTassController.prototype.stop = function () {
        this._isRunning = false;
        this.view.visible = false;
    };
    return BaseTassController;
})(ru.flaps.events.EventDispatcher);
//# sourceMappingURL=BaseTassController.js.map