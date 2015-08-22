declare class CarouselList extends polymer.Base implements polymer.Element {
    attached(): void;
    private newSearch();
    private itemIsInSelectedTypes(value);
    private nameSearch();
    private list;
    private header;
    typesProvider: Array<TypeVO>;
    dataProvider: Array<CarouselVO>;
    dataChaged(newDataProvider: Array<CarouselVO>, newTypesProvider: Array<TypeVO>): void;
    private resetSearch();
    resultProvider: Array<CarouselVO>;
    emptyResult: boolean;
}
