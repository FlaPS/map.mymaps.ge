declare class CarouselVO extends ObjectVO {
    name: string;
    age: number;
    hasPhoto: boolean;
    hasVideo: boolean;
    desc: string;
    pic: string;
    price: number;
    intensity: number;
    types: Array<number>;
    constructor(id?: number, name?: string, age?: number, hasPhoto?: boolean, hasVideo?: boolean, desc?: string, pic?: string, price?: number, intensity?: number, types?: Array<number>);
    lowerName: string;
}
