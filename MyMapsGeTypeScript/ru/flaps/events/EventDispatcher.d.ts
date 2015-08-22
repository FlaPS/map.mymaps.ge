declare module ru.flaps.events {
    class EventDispatcher {
        private _events;
        addEventListener(key: string, func: Function): void;
        removeEventListener(key: string, func: Function): void;
        dispatchEventWith(key: string, dataObj?: any): void;
    }
}
