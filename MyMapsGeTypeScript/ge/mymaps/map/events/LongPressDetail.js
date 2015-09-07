var ge;
(function (ge) {
    var mymaps;
    (function (mymaps) {
        var map;
        (function (map) {
            var events;
            (function (events) {
                var LongPressDetail = (function () {
                    function LongPressDetail(latLng) {
                        this.latLng = latLng;
                        this.geocoder = new ge.mymaps.map.utils.Geocoder(this.latLng);
                    }
                    return LongPressDetail;
                })();
                events.LongPressDetail = LongPressDetail;
            })(events = map.events || (map.events = {}));
        })(map = mymaps.map || (mymaps.map = {}));
    })(mymaps = ge.mymaps || (ge.mymaps = {}));
})(ge || (ge = {}));
//# sourceMappingURL=LongPressDetail.js.map