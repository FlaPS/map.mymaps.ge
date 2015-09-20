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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var CarouselHeader = (function (_super) {
    __extends(CarouselHeader, _super);
    function CarouselHeader() {
        _super.apply(this, arguments);
        /**
         * Attributes
         */
        this.name = 'asd';
        this.age = 0;
        this.intensity = 0;
        this.hasPhoto = true;
        this.hasVideo = false;
    }
    Object.defineProperty(CarouselHeader.prototype, "dataProvider", {
        get: function () {
            return this._dataProvider;
        },
        set: function (value) {
            this._dataProvider = value;
            this.set('aheadsDataProvider', this._dataProvider);
            this.resetInputs();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarouselHeader.prototype, "typesProvider", {
        get: function () {
            return this._typesProvider;
        },
        set: function (value) {
            this._typesProvider = value;
            this.set('typesProvider', this._typesProvider);
            this.resetInputs();
        },
        enumerable: true,
        configurable: true
    });
    CarouselHeader.prototype.attached = function () {
        console.log('ready');
        this._nameInput = document.getElementById('nameInput');
        console.log('header attached ' + this._nameInput);
        this._nameInput.oninput = this.nameChanged.bind(this);
        this.resetInputs();
    };
    CarouselHeader.prototype.conditionsChanged = function (newAllowVideo, newAllowPhoto, newIntensity, newAge) {
        this.name = '';
        if (!this._nameInput) {
            return;
        }
        this._nameInput.value = '';
        this.fire(CarouselHeader.CONDITIONS_CHANGE);
        console.log('conditions chaged');
    };
    CarouselHeader.prototype.nameChanged = function (newName) {
        if (newName == '')
            return;
        this.hasPhoto = false;
        this.hasVideo = false;
        this.intensity = 0;
        this.age = 0;
        this.name = this._nameInput.value;
        var menu = this.$.typesMenu;
        var values = [];
        var index = 0;
        while (index < this.typesProvider.length) {
            var typeVo = this.typesProvider[index];
            typeVo.active = true;
            values.push(index);
            index++;
        }
        menu.selectedValues = values;
        this.fire(CarouselHeader.NAME_CHANGE);
        console.log('nameChanged');
    };
    CarouselHeader.prototype.resetInputs = function () {
        this.name = '';
        this.hasPhoto = false;
        this.hasVideo = false;
        this.intensity = 0;
        this.age = 0;
        this.fire(CarouselHeader.NAME_CHANGE);
        var menu = this.$.typesMenu;
        var values = [];
        var index = 0;
        if (!this.typesProvider)
            return;
        while (index < this.typesProvider.length) {
            var typeVo = this.typesProvider[index];
            typeVo.active = true;
            values.push(index);
            index++;
        }
        menu.selectedValues = values;
    };
    CarouselHeader.prototype.changeSelection = function (e, details) {
        //console.log('select', e ,details);
        var menu = this.$.typesMenu;
        var index = 0;
        while (index < this.typesProvider.length) {
            this.typesProvider[index].active = false;
            index++;
        }
        var indicies = menu.selectedValues;
        var index = 0;
        while (index < indicies.length) {
            this.typesProvider[indicies[index]].active = true;
            console.log('->>>>>>>>>>>>>>>>>>>>>>>.allow type ' + this.typesProvider[indicies[index]].id);
            index++;
        }
        this.fire(CarouselHeader.CONDITIONS_CHANGE);
    };
    CarouselHeader.CONDITIONS_CHANGE = 'conditionsChange';
    CarouselHeader.NAME_CHANGE = 'nameChange';
    __decorate([
        property({ type: String, value: 'asd', notify: true, reflectToAttribute: true }), 
        __metadata('design:type', String)
    ], CarouselHeader.prototype, "name");
    __decorate([
        property({ type: String, value: '', notify: true, reflectToAttribute: true }), 
        __metadata('design:type', String)
    ], CarouselHeader.prototype, "desc");
    __decorate([
        property({ type: Number, value: 0, notify: true, reflectToAttribute: true }), 
        __metadata('design:type', Number)
    ], CarouselHeader.prototype, "age");
    __decorate([
        property({ type: Number, value: 0, notify: true, reflectToAttribute: true }), 
        __metadata('design:type', Number)
    ], CarouselHeader.prototype, "intensity");
    __decorate([
        property({ type: Boolean, value: true, notify: true, reflectToAttribute: true }), 
        __metadata('design:type', Boolean)
    ], CarouselHeader.prototype, "hasPhoto");
    __decorate([
        property({ type: Boolean, value: false, notify: true, reflectToAttribute: true }), 
        __metadata('design:type', Boolean)
    ], CarouselHeader.prototype, "hasVideo");
    __decorate([
        property({ type: Array, value: [], notify: true }), 
        __metadata('design:type', Array)
    ], CarouselHeader.prototype, "aheadsDataProvider");
    Object.defineProperty(CarouselHeader.prototype, "conditionsChanged",
        __decorate([
            observe("hasVideo,hasPhoto,intensity,age"), 
            __metadata('design:type', Function), 
            __metadata('design:paramtypes', [Object, Object, Object, Object]), 
            __metadata('design:returntype', void 0)
        ], CarouselHeader.prototype, "conditionsChanged", Object.getOwnPropertyDescriptor(CarouselHeader.prototype, "conditionsChanged")));
    CarouselHeader = __decorate([
        component("carousel-header"), 
        __metadata('design:paramtypes', [])
    ], CarouselHeader);
    return CarouselHeader;
})(polymer.Base);
console.log('caroules-header registered');
CarouselHeader.register();
//# sourceMappingURL=CarouselHeader.js.map