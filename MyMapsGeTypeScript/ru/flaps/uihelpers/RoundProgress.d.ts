declare module ru.flaps.uihelpers {
    class RoundProgress extends ru.flaps.events.EventDispatcher {
        canvas: HTMLCanvasElement;
        private ctx;
        private imd;
        private circ;
        private quart;
        constructor(canvas: HTMLCanvasElement);
        private _value;
        value: number;
        private draw(current);
    }
}
