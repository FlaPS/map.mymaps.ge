var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ge;
(function (ge) {
    var mymaps;
    (function (mymaps) {
        var map;
        (function (map) {
            var data;
            (function (data) {
                var GeMapObject = (function (_super) {
                    __extends(GeMapObject, _super);
                    function GeMapObject(id, name) {
                        if (id === void 0) { id = -1; }
                        if (name === void 0) { name = ''; }
                        _super.call(this);
                        this.id = id;
                        this.name = name;
                    }
                    return GeMapObject;
                })(ru.flaps.events.EventDispatcher);
                data.GeMapObject = GeMapObject;
            })(data = map.data || (map.data = {}));
        })(map = mymaps.map || (mymaps.map = {}));
    })(mymaps = ge.mymaps || (ge.mymaps = {}));
})(ge || (ge = {}));
//# sourceMappingURL=GeMapObject.js.map