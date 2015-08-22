class CarouselVO extends ObjectVO
{
    constructor(
        id:number = -1,
        public name: string = "Новое имя",

        public age: number = 0,

        public hasPhoto: boolean= false,

        public hasVideo: boolean = false,

        public desc: string = "Описание",

        public pic: string = "http://tass.ru/images/tass_logo_share_ru.png",

        public price: number = 100,

        public intensity: number = 1,

        public types: Array<number> = new Array<number>()
        )

    {
        super();
        this.id = id;
        this._explicitType = 'CarouselVO';
    }



    public get lowerName(): string {
        return this.name.toLowerCase()
    }

}