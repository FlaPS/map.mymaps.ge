/*
  Prototype Event Dispatcher
*/
module ru.flaps.events {
    export class EventDispatcher
    {
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
            }
        }
    }
}