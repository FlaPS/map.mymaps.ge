/*
  Prototype Event Dispatcher
*/
var ru;
(function (ru) {
    var flaps;
    (function (flaps) {
        var events;
        (function (events) {
            var EventDispatcher = (function () {
                function EventDispatcher() {
                    this._onceFunctions = [];
                    this._events = {};
                }
                EventDispatcher.prototype.on = function (key, fnc) {
                    this.addEventListener(key, fnc);
                };
                EventDispatcher.prototype.off = function (key, fnc) {
                    this.removeEventListener(key, fnc);
                };
                EventDispatcher.prototype.once = function (key, fnc) {
                    this.addEventListener(key, fnc);
                    if (this._onceFunctions[key] == null) {
                        this._onceFunctions[key] = [];
                    }
                    this._onceFunctions[key].push(fnc);
                };
                EventDispatcher.prototype.addEventListener = function (key, func) {
                    if (!this._events.hasOwnProperty(key)) {
                        this._events[key] = [];
                    }
                    this._events[key].push(func);
                };
                EventDispatcher.prototype.removeEventListener = function (key, func) {
                    if (this._events.hasOwnProperty(key)) {
                        for (var i in this._events[key]) {
                            if (this._events[key][i] === func) {
                                this._events[key].splice(i, 1);
                            }
                        }
                    }
                };
                EventDispatcher.prototype.dispatchEventWith = function (key, dataObj) {
                    if (dataObj === void 0) { dataObj = {}; }
                    // console.log("Dispatching " + key);
                    if (this._events.hasOwnProperty(key)) {
                        dataObj = dataObj || {};
                        dataObj.currentTarget = this;
                        for (var i in this._events[key]) {
                            //   console.log("Handler found for " + key);
                            this._events[key][i](dataObj);
                        }
                        if (this._onceFunctions[key]) {
                            var fncs = this._onceFunctions[key];
                            var n = 0;
                            while (n < fncs.length) {
                                this.removeEventListener(key, fncs[n]);
                                n++;
                            }
                        }
                    }
                };
                return EventDispatcher;
            })();
            events.EventDispatcher = EventDispatcher;
        })(events = flaps.events || (flaps.events = {}));
    })(flaps = ru.flaps || (ru.flaps = {}));
})(ru || (ru = {}));
//# sourceMappingURL=EventDispatcher.js.map