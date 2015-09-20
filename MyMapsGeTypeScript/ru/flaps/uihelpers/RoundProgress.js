var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ru;
(function (ru) {
    var flaps;
    (function (flaps) {
        var uihelpers;
        (function (uihelpers) {
            var RoundProgress = (function (_super) {
                __extends(RoundProgress, _super);
                function RoundProgress(canvas) {
                    _super.call(this);
                    this.canvas = canvas;
                    this.imd = null;
                    this.circ = Math.PI * 2;
                    this.quart = Math.PI / 2;
                    this._value = 0;
                    this.ctx = canvas.getContext("2d");
                    this.ctx.beginPath();
                    this.ctx.strokeStyle = '#99CC33';
                    this.ctx.lineCap = 'square';
                    this.ctx.closePath();
                    this.ctx.fill();
                    this.ctx.lineWidth = 10.0;
                    this.imd = this.ctx.getImageData(0, 0, 50, 50);
                    this.draw(50);
                }
                Object.defineProperty(RoundProgress.prototype, "value", {
                    get: function () {
                        return this._value;
                    },
                    set: function (num) {
                        this._value = num;
                        this.draw(num);
                    },
                    enumerable: true,
                    configurable: true
                });
                RoundProgress.prototype.draw = function (current) {
                    this.ctx.putImageData(this.imd, 0, 0);
                    this.ctx.beginPath();
                    this.ctx.arc(25, 25, 20, -(this.quart), ((this.circ) * current) - this.quart, false);
                    this.ctx.stroke();
                };
                return RoundProgress;
            })(ru.flaps.events.EventDispatcher);
            uihelpers.RoundProgress = RoundProgress;
        })(uihelpers = flaps.uihelpers || (flaps.uihelpers = {}));
    })(flaps = ru.flaps || (ru.flaps = {}));
})(ru || (ru = {}));
//# sourceMappingURL=RoundProgress.js.map