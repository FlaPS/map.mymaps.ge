module ru.flaps.uihelpers {


    export class RoundProgress extends ru.flaps.events.EventDispatcher {
        private ctx: CanvasRenderingContext2D;
        private imd: any = null;
        private circ = Math.PI * 2;
        private quart = Math.PI / 2;


        constructor(public canvas: HTMLCanvasElement) {
            super();
            this.ctx = canvas.getContext("2d");
            this.ctx.beginPath();
            this.ctx.strokeStyle = '#99CC33';
            this.ctx.lineCap = 'square';
            this.ctx.closePath();
            this.ctx.fill();
            this.ctx.lineWidth = 10.0;

            this.imd = this.ctx.getImageData(0, 0, 50,50);
            this.draw(50);
        }


        private _value: number = 0;

        public set value(num: number) {
            this._value = num;
            this.draw(num);

        }
        public get value(): number {
            return this._value
        }

        private draw(current) {
            this.ctx.putImageData(this.imd, 0, 0);
            this.ctx.beginPath();
            this.ctx.arc(25, 25, 20, -(this.quart), ((this.circ) * current) - this.quart, false);
            this.ctx.stroke();
        }

    }

}