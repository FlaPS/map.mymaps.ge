var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BaseController = (function (_super) {
    __extends(BaseController, _super);
    function BaseController() {
        _super.apply(this, arguments);
        this._isRunning = false;
    }
    Object.defineProperty(BaseController.prototype, "context", {
        get: function () { return AppContext.instance; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseController.prototype, "view", {
        get: function () {
            return this._view;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseController.prototype, "model", {
        get: function () {
            return this._model;
        },
        enumerable: true,
        configurable: true
    });
    BaseController.prototype.setUp = function (view, model) {
        this._view = view;
        this._model = model;
    };
    BaseController.prototype.start = function () {
        this._isRunning = true;
        this.view.style.display = 'block';
    };
    BaseController.prototype.stop = function () {
        this._isRunning = false;
        this.view.style.display = 'none';
    };
    return BaseController;
})(ru.flaps.events.EventDispatcher);
//# sourceMappingURL=BaseController.js.map