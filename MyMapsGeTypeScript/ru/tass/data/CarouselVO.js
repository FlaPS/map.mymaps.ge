var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CarouselVO = (function (_super) {
    __extends(CarouselVO, _super);
    function CarouselVO(id, name, age, hasPhoto, hasVideo, desc, pic, price, intensity, types) {
        if (id === void 0) { id = -1; }
        if (name === void 0) { name = "Новое имя"; }
        if (age === void 0) { age = 0; }
        if (hasPhoto === void 0) { hasPhoto = false; }
        if (hasVideo === void 0) { hasVideo = false; }
        if (desc === void 0) { desc = "Описание"; }
        if (pic === void 0) { pic = "http://tass.ru/images/tass_logo_share_ru.png"; }
        if (price === void 0) { price = 100; }
        if (intensity === void 0) { intensity = 1; }
        if (types === void 0) { types = new Array(); }
        _super.call(this);
        this.name = name;
        this.age = age;
        this.hasPhoto = hasPhoto;
        this.hasVideo = hasVideo;
        this.desc = desc;
        this.pic = pic;
        this.price = price;
        this.intensity = intensity;
        this.types = types;
        this.id = id;
        this._explicitType = 'CarouselVO';
    }
    Object.defineProperty(CarouselVO.prototype, "lowerName", {
        get: function () {
            return this.name.toLowerCase();
        },
        enumerable: true,
        configurable: true
    });
    return CarouselVO;
})(ObjectVO);
//# sourceMappingURL=CarouselVO.js.map