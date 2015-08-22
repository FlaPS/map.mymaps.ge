

@component("carousel-header")
class CarouselHeader extends polymer.Base implements polymer.Element
{

    public static CONDITIONS_CHANGE : string = 'conditionsChange';

    public static NAME_CHANGE       : string = 'nameChange';



    /**
     * Attributes
     */
    @property({ type: String, value: 'asd', notify:true, reflectToAttribute: true })
    public name: string ='asd';

    @property({ type: String, value: '', notify: true, reflectToAttribute: true })
    public desc: string;

    @property({ type: Number, value: 0, notify: true, reflectToAttribute: true })
    public age: number = 0;

    @property({ type: Number, value: 0, notify: true, reflectToAttribute: true })
    public intensity: number = 0;

    @property({ type: Boolean, value: true, notify: true, reflectToAttribute: true })
    public hasPhoto: Boolean = true;

    @property({ type: Boolean, value: false, notify: true, reflectToAttribute: true })
    public hasVideo: Boolean = false;





    private _dataProvider: Array<CarouselVO>;
    public set dataProvider(value: Array<CarouselVO>)
    {
        this._dataProvider = value;
   
        this.set('aheadsDataProvider', this._dataProvider);
        this.resetInputs();
    }
    public get dataProvider(): Array<CarouselVO> {
        return this._dataProvider
    }


    private _typesProvider: Array<TypeVO>;
    public set typesProvider(value: Array<TypeVO>) {
        this._typesProvider = value;
   
        this.set('typesProvider', this._typesProvider);
        this.resetInputs();
    }
    public get typesProvider(): Array<TypeVO> {
        return this._typesProvider
    }

    private _nameInput: HTMLInputElement;
   attached() {
        console.log('ready');
        this._nameInput = <HTMLInputElement>document.getElementById('nameInput');
        console.log('header attached '+this._nameInput);
        this._nameInput.oninput = this.nameChanged.bind(this);
        this.resetInputs();
    }

    @property({ type: Array, value: [], notify: true})
    public aheadsDataProvider: Array<CarouselVO>;

    @observe("hasVideo,hasPhoto,intensity,age")
    conditionsChanged(newAllowVideo, newAllowPhoto, newIntensity, newAge)
    {
        this.name = '';
        if (!this._nameInput) {
            return;
        }
        this._nameInput.value = '';
        
        this.fire(CarouselHeader.CONDITIONS_CHANGE);
        console.log('conditions chaged');
    }


    nameChanged(newName) {
        if (newName == '') return;
        this.hasPhoto = false;
        this.hasVideo = false;
        this.intensity = 0;
        this.age = 0;
        this.name = this._nameInput.value;
        var menu = this.$.typesMenu;

        var values: Array<number> = [];
        var index: number = 0;
        while (index < this.typesProvider.length) {
            var typeVo: TypeVO = this.typesProvider[index];
            typeVo.active = true;
            values.push(index);
            index++;
        }
        menu.selectedValues = values;
        this.fire(CarouselHeader.NAME_CHANGE);
        console.log('nameChanged');
    }
    
    public resetInputs(): void {
        this.name = '';
        this.hasPhoto = false;
        this.hasVideo = false;
        this.intensity = 0;
        this.age = 0;
   
        this.fire(CarouselHeader.NAME_CHANGE);
        var menu = this.$.typesMenu;

        var values: Array<number> = [];
        var index: number = 0;
        if (!this.typesProvider) return;
        while (index < this.typesProvider.length) {
            var typeVo: TypeVO = this.typesProvider[index];
            typeVo.active = true;
            values.push(index);
            index++;
        }
        
        menu.selectedValues = values;
    }


    public changeSelection(e, details): void
    {
        //console.log('select', e ,details);
        var menu = this.$.typesMenu;

        var index: number = 0;
        while (index < this.typesProvider.length) {
            this.typesProvider[index].active = false;
            index++;
        }

        var indicies: Array<number> = menu.selectedValues;
        var index: number = 0;
        while (index < indicies.length) {
            
            this.typesProvider[indicies[index]].active = true;
            console.log('->>>>>>>>>>>>>>>>>>>>>>>.allow type ' + this.typesProvider[indicies[index]].id);
            index++;
        }
        this.fire(CarouselHeader.CONDITIONS_CHANGE);
    }

}
console.log('caroules-header registered');
CarouselHeader.register(); 