var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var RequestVO = (function (_super) {
    __extends(RequestVO, _super);
    function RequestVO(service, method, params) {
        if (params === void 0) { params = []; }
        _super.call(this);
        this._explicitType = "RequestVO";
        this.service = service;
        this.method = method;
        this.params = params;
    }
    return RequestVO;
})(ObjectVO);
//# sourceMappingURL=RequestVO.js.map