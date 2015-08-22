declare class CarouselHeader extends polymer.Base implements polymer.Element {
    static CONDITIONS_CHANGE: string;
    static NAME_CHANGE: string;
    /**
     * Attributes
     */
    name: string;
    desc: string;
    age: number;
    intensity: number;
    hasPhoto: Boolean;
    hasVideo: Boolean;
    private _dataProvider;
    dataProvider: Array<CarouselVO>;
    private _typesProvider;
    typesProvider: Array<TypeVO>;
    private _nameInput;
    attached(): void;
    aheadsDataProvider: Array<CarouselVO>;
    conditionsChanged(newAllowVideo: any, newAllowPhoto: any, newIntensity: any, newAge: any): void;
    nameChanged(newName: any): void;
    resetInputs(): void;
    changeSelection(e: any, details: any): void;
}
