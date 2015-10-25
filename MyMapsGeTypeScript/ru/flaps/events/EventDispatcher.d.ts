declare module ru.flaps.events {
    class EventDispatcher {
        on(key: string, fnc: Function): void;
        off(key: string, fnc: Function): void;
        once(key: string, fnc: Function): void;
        private _onceFunctions;
        private _events;
        addEventListener(key: string, func: Function): void;
        removeEventListener(key: string, func: Function): void;
        dispatchEventWith(key: string, dataObj?: any): void;
    }
}
