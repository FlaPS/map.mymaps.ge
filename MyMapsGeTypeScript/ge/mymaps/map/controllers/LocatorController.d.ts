declare module ge.mymaps.map.controllers {
    class LocatorController extends ru.flaps.events.EventDispatcher {
        /**
         * Singleton's instance
         */
        static instance: ge.mymaps.map.controllers.LocatorController;
        /**
         * @private
         */
        private static _instance;
        /**
         * @private
         */
        constructor();
        moveToLocation(): void;
    }
}
