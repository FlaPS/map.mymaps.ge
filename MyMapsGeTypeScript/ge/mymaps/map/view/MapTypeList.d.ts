declare class MapTypeList extends polymer.Base implements polymer.Element {
    static CHANGE_MAP_TYPE: string;
    attached(): void;
    setMapTypesProvider(vlue: MapTypesProvider): void;
    types: Array<MapType>;
    mapTypesProvider: MapTypesProvider;
    changeTypeSelection(e: any, details: any): void;
}
