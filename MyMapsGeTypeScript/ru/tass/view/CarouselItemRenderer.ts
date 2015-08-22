

@component("carousel-item-renderer")
class CarouselItemRenderer extends polymer.Base implements polymer.Element {

    @property({ type: String, value: '', notify: true, reflectToAttribute: true })
    public name: string;

    @property({ type: String, value: '', notify: true, reflectToAttribute: true })
    public pic: string;

    @property({ type: String, value: '', notify: true, reflectToAttribute: true })
    public desc: string;

    @property({ type: Number, value: '', notify: true, reflectToAttribute: true })
    public age: number;

    @property({ type: Number, notify: true, reflectToAttribute: true })
    public intensity: number;

    @property({ type: Number, notify: true, reflectToAttribute: true })
    public hasphoto:number;

    @property({ type: Number, notify: true, reflectToAttribute: true })
    public hasvideo:number;

}

console.log('caroules-item-renderer registered');
CarouselItemRenderer.register(); 