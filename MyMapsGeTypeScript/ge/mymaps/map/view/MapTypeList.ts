
@component("map-type-list")
class MapTypeList extends polymer.Base implements polymer.Element {

    public static get CHANGE_MAP_TYPE(): string { return "changeMapType"; }

    attached()
    {
        console.log('map list attached');

    }

    public setMapTypesProvider(vlue: MapTypesProvider): void {
        this.set('types', vlue.types);
        this.mapTypesProvider = vlue;
    }

    public types: Array<MapType> = [];
   
    mapTypesProvider: MapTypesProvider;

    public changeTypeSelection(e, details): void {
        //console.log('select', e ,details);
        var menu = this.$.typesMenu;

        var index: number = 0;

        var index:number = menu.selectedItem.index;
        console.log('dispatching chage maptype to ' + index);
        this.mapTypesProvider.mapType = this.mapTypesProvider.types[index];
    }
}
MapTypeList.register(); 