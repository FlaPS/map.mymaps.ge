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
            var events;
            (function (events) {
                var MarkerPressDetail = (function (_super) {
                    __extends(MarkerPressDetail, _super);
                    function MarkerPressDetail(latLng, mapObject) {
                        _super.call(this, latLng);
                        this.mapObject = mapObject;
                        //this.geocoder = new ge.mymaps.map.utils.Geocoder(this.latLng);
                    }
                    return MarkerPressDetail;
                })(events.LongPressDetail);
                events.MarkerPressDetail = MarkerPressDetail;
            })(events = map.events || (map.events = {}));
        })(map = mymaps.map || (mymaps.map = {}));
    })(mymaps = ge.mymaps || (ge.mymaps = {}));
})(ge || (ge = {}));
//# sourceMappingURL=MarkerPressDetail.js.map