var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
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
var CarouselList = (function (_super) {
    __extends(CarouselList, _super);
    function CarouselList() {
        _super.apply(this, arguments);
        this.emptyResult = false;
    }
    CarouselList.prototype.attached = function () {
        console.log('list attached');
        this.list = this.$.list;
        this.header = this.$.header;
        this.header['addEventListener'](CarouselHeader.CONDITIONS_CHANGE, this.newSearch.bind(this));
        this.header['addEventListener'](CarouselHeader.NAME_CHANGE, this.nameSearch.bind(this));
    };
    CarouselList.prototype.newSearch = function () {
        console.log('new type search');
        var newSearchResult = new Array();
        console.log('conditions change');
        var index = 0;
        var item;
        while (index < this.dataProvider.length) {
            item = this.dataProvider[index];
            if (item.age >= this.header.age &&
                item.intensity >= this.header.intensity &&
                item.hasPhoto >= this.header.hasPhoto &&
                item.hasVideo >= this.header.hasVideo &&
                this.itemIsInSelectedTypes(item)) {
                newSearchResult.push(item);
            }
            index++;
        }
        this.set('resultProvider', newSearchResult);
        if (newSearchResult.length == 0)
            this.set('emptyResult', true);
        else
            this.set('emptyResult', false);
    };
    CarouselList.prototype.itemIsInSelectedTypes = function (value) {
        var allow = false;
        var i = 0;
        console.log(value.name + ' test types ' + value.types.toString());
        while (i < value.types.length) {
            console.log('type ' + value.types[i] + ' allowed ' + this.typesProvider[value.types[i]].active);
            if (this.typesProvider[value.types[i]].active) {
                allow = true;
            }
            i++;
        }
        return allow;
    };
    CarouselList.prototype.nameSearch = function () {
        //New search result
        var newSearchResult = new Array();
        var index = 0;
        var item;
        while (index < this.dataProvider.length) {
            item = this.dataProvider[index];
            if (item.name.toLowerCase().indexOf(this.header.name.toLowerCase()) > -1) {
                newSearchResult.push(item);
            }
            index++;
        }
        this.set('resultProvider', newSearchResult);
        if (newSearchResult.length == 0)
            this.set('emptyResult', true);
        else
            this.set('emptyResult', false);
        /**
         * TODO Forget about - performance is ok
         */
        //Remove old items search result - 
        /* index = 0;
 
         while (index < this.resultProvider.length) {
             item = this.resultProvider[index];
             if (newSearchResult.indexOf(item) ==- 1) {
              //   this.resultProvider.splice(index,1);
                 this.splice('resultProvider', index, 1);
             }
             index++;
         }
 
 
         //Add new items
         index = 0;
 
         while (index < newSearchResult.length) {
             item = newSearchResult[index];
             if (this.resultProvider.indexOf(item) == - 1) {
                 this.unshift('resultProvider', item);
             }
             index++;
         }*/
    };
    CarouselList.prototype.dataChaged = function (newDataProvider, newTypesProvider) {
        this.resetSearch();
        var header = this.$.header;
        header.dataProvider = newDataProvider;
        header.typesProvider = newTypesProvider;
    };
    CarouselList.prototype.resetSearch = function () {
        //clone array to result
        this.resultProvider = this.dataProvider.slice(0);
        this.set('resultProvider', this.resultProvider);
    };
    __decorate([
        property({ type: Array, value: [], notify: true }), 
        __metadata('design:type', Array)
    ], CarouselList.prototype, "typesProvider");
    __decorate([
        property({ type: Array, value: [], notify: true }), 
        __metadata('design:type', Array)
    ], CarouselList.prototype, "dataProvider");
    Object.defineProperty(CarouselList.prototype, "dataChaged",
        __decorate([
            observe('dataProvider,typesProvider'), 
            __metadata('design:type', Function), 
            __metadata('design:paramtypes', [Array, Array]), 
            __metadata('design:returntype', void 0)
        ], CarouselList.prototype, "dataChaged", Object.getOwnPropertyDescriptor(CarouselList.prototype, "dataChaged")));
    __decorate([
        property({ type: Array, value: [], notify: true }), 
        __metadata('design:type', Array)
    ], CarouselList.prototype, "resultProvider");
    __decorate([
        property({ type: Boolean, value: false, notify: true, reflectToAttribute: true }), 
        __metadata('design:type', Boolean)
    ], CarouselList.prototype, "emptyResult");
    CarouselList = __decorate([
        component("carousel-list"), 
        __metadata('design:paramtypes', [])
    ], CarouselList);
    return CarouselList;
})(polymer.Base);
CarouselList.register();
//# sourceMappingURL=CarouselList.js.map