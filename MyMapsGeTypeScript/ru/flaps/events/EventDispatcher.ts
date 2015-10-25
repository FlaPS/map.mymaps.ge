/*
  Prototype Event Dispatcher
*/
module ru.flaps.events {
    export class EventDispatcher
    {

        public on(key: string, fnc: Function): void {
            this.addEventListener(key, fnc)
        }
        public off(key: string, fnc: Function): void {
            this.removeEventListener(key, fnc)
        }
        public once(key: string, fnc: Function): void {
            this.addEventListener(key, fnc)
            if (this._onceFunctions[key] == null) {
                this._onceFunctions[key] = []
            }
            this._onceFunctions[key].push(fnc)
        }
        private _onceFunctions:Array<Array<Function>> = []
        private _events = {};
        public addEventListener(key: string, func: Function): void {
            if (!this._events.hasOwnProperty(key)) {
                this._events[key] = [];
            }
            this._events[key].push(func);
        }

        public removeEventListener(key: string, func: Function): void {
            if (this._events.hasOwnProperty(key)) {
                for (var i in this._events[key]) {
                    if (this._events[key][i] === func) {
                        this._events[key].splice(i, 1);
                    }
                }
            }
        }

        public dispatchEventWith(key: string, dataObj: any = {}): void {
           // console.log("Dispatching " + key);
            if (this._events.hasOwnProperty(key)) {
                dataObj = dataObj || {};
                dataObj.currentTarget = this;
                for (var i in this._events[key]) {
                 //   console.log("Handler found for " + key);
                    this._events[key][i](dataObj);
                }
                if (this._onceFunctions[key]) {
                    var fncs: Array<Function> = this._onceFunctions[key]
                    var n: number = 0
                    while (n < fncs.length) {
                        this.removeEventListener(key, fncs[n])
                        n++;
                    }
                }
            }
        }
    }
}