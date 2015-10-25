/// <reference path="../../../../ru/flaps/events/EventDispatcher.d.ts" />
declare module ge.mymaps.map.utils {
    /***
     * MyMpas ge router service
     *
     */
    class Router extends ru.flaps.events.EventDispatcher {
        static START_CHANGED: string;
        static END_CHANGED: string;
        static CALCULATED: string;
        constructor();
        private _start;
        /**
         *
         * Set start point of the router
         */
        start: any;
        private _end;
        /**
         *
         * Set end point of the router
         */
        end: any;
        /**
         *
         * Available to build route path
         */
        isAvailable(): boolean;
        calculate(): void;
    }
}
