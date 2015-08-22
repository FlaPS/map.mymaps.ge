
@component("carousel-list")
class CarouselList extends polymer.Base implements polymer.Element {



    attached() {
        console.log('list attached');
        this.list   = <CarouselList>this.$.list;
        this.header = <CarouselHeader>this.$.header;

        this.header['addEventListener'](CarouselHeader.CONDITIONS_CHANGE, this.newSearch.bind(this));
        this.header['addEventListener'](CarouselHeader.NAME_CHANGE, this.nameSearch.bind(this));
    }

    private newSearch(): void
    {
        console.log('new type search');
        var newSearchResult: Array<CarouselVO> = new Array<CarouselVO>();
        console.log('conditions change');
        var index: number = 0;
        var item: CarouselVO;
        while (index < this.dataProvider.length) {
            item = this.dataProvider[index];

            if (item.age >= this.header.age &&
                item.intensity >= this.header.intensity &&
                item.hasPhoto >= this.header.hasPhoto &&
                item.hasVideo >= this.header.hasVideo &&
                this.itemIsInSelectedTypes(item)
                )
            {
                newSearchResult.push(item);
            }
            index++;
        }
        this.set('resultProvider', newSearchResult);

        if (newSearchResult.length == 0)
            this.set('emptyResult', true);
        else
            this.set('emptyResult', false);
          
    }

    private itemIsInSelectedTypes(value: CarouselVO): boolean {
        var allow: boolean = false;
        var i: number = 0;
        console.log(value.name+' test types ' + value.types.toString())
      
        while (i < value.types.length) {
            console.log('type ' + value.types[i]+' allowed ' + this.typesProvider[value.types[i]].active)
            if (this.typesProvider[value.types[i]].active) {
                allow = true
            }
            i++
        }
        return allow;
    }

    private nameSearch(): void {

        //New search result
        var newSearchResult: Array<CarouselVO> = new Array<CarouselVO>();

        var index: number = 0;
        var item: CarouselVO;
        while (index < this.dataProvider.length) {
            item = this.dataProvider[index];
            
            if (item.name.toLowerCase().indexOf(this.header.name.toLowerCase())>-1)
            {
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

    }





    private list: CarouselList;
    private header: CarouselHeader;
    @property({ type: Array, value: [], notify: true })
    public typesProvider: Array<TypeVO>;

    @property({ type: Array, value: [], notify: true })
    public dataProvider: Array<CarouselVO>;

    @observe('dataProvider,typesProvider')
    dataChaged(newDataProvider:Array<CarouselVO>, newTypesProvider:Array<TypeVO>):void {
        this.resetSearch();
        var header: CarouselHeader = <CarouselHeader>this.$.header;
        header.dataProvider = newDataProvider;
        header.typesProvider = newTypesProvider;
    }

    private resetSearch(): void {
        //clone array to result
        this.resultProvider = this.dataProvider.slice(0);
        this.set('resultProvider', this.resultProvider);
    }

    @property({ type: Array, value: [], notify: true })
    public resultProvider: Array<CarouselVO>;


    @property({ type: Boolean, value: false, notify: true, reflectToAttribute: true })
    public emptyResult: boolean = false;
}

CarouselList.register(); 