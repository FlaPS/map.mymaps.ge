var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ItemVO = (function (_super) {
    __extends(ItemVO, _super);
    function ItemVO(name, quantity, price) {
        if (name === void 0) { name = ''; }
        if (quantity === void 0) { quantity = 0; }
        if (price === void 0) { price = 0; }
        _super.call(this);
        this.name = '';
        this.quantity = 0;
        this.price = 0;
        this._explicitType = 'ItemVO';
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }
    return ItemVO;
})(ObjectVO);
//# sourceMappingURL=ItemVO.js.map