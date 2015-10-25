declare module ge.mymaps.map.utils {
    class Locale extends ru.flaps.events.EventDispatcher {
        /**
         * Singleton's instance
         */
        static instance: ge.mymaps.map.utils.Locale;
        /**
         * @private
         */
        private static _instance;
        /**
         * @private
         */
        constructor();
        private _language;
        language: string;
        static ENGLISH: string;
        static RUSSIAN: string;
        static GEORGIAN: string;
    }
}
