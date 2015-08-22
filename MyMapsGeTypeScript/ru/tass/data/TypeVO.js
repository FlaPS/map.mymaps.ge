var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TypeVO = (function (_super) {
    __extends(TypeVO, _super);
    function TypeVO(id, name) {
        if (id === void 0) { id = -1; }
        if (name === void 0) { name = "Новый тип"; }
        _super.call(this);
        this.name = name;
        this.active = true;
        this.id = id;
        this._explicitType = 'TypeVO';
    }
    return TypeVO;
})(ObjectVO);
//# sourceMappingURL=TypeVO.js.map