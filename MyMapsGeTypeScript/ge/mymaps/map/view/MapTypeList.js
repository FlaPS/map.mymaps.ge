var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var MapTypeList = (function (_super) {
    __extends(MapTypeList, _super);
    function MapTypeList() {
        _super.apply(this, arguments);
        this.types = [];
    }
    Object.defineProperty(MapTypeList, "CHANGE_MAP_TYPE", {
        get: function () { return "changeMapType"; },
        enumerable: true,
        configurable: true
    });
    MapTypeList.prototype.attached = function () {
        console.log('map list attached');
    };
    MapTypeList.prototype.setMapTypesProvider = function (vlue) {
        this.set('types', vlue.types);
        this.mapTypesProvider = vlue;
    };
    MapTypeList.prototype.changeTypeSelection = function (e, details) {
        //console.log('select', e ,details);
        var menu = this.$.typesMenu;
        var index = 0;
        var index = menu.selectedItem.index;
        console.log('dispatching chage maptype to ' + index);
        this.mapTypesProvider.mapType = this.mapTypesProvider.types[index];
    };
    MapTypeList = __decorate([
        component("map-type-list")
    ], MapTypeList);
    return MapTypeList;
})(polymer.Base);
MapTypeList.register();
//# sourceMappingURL=MapTypeList.js.map