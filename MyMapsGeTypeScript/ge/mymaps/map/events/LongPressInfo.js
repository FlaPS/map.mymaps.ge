var ge;
(function (ge) {
    var mymaps;
    (function (mymaps) {
        var map;
        (function (map) {
            var events;
            (function (events) {
                var LongPressInfo = (function () {
                    function LongPressInfo(event, mapObject) {
                        this.event = event;
                        this.mapObject = mapObject;
                    }
                    return LongPressInfo;
                })();
                events.LongPressInfo = LongPressInfo;
            })(events = map.events || (map.events = {}));
        })(map = mymaps.map || (mymaps.map = {}));
    })(mymaps = ge.mymaps || (ge.mymaps = {}));
})(ge || (ge = {}));
//# sourceMappingURL=LongPressInfo.js.map