module ge.mymaps.map.utils {
    export class Locale extends ru.flaps.events.EventDispatcher
    {
        /**
         * Singleton's instance
         */
        public static get instance(): ge.mymaps.map.utils.Locale {
            if (Locale._instance == null) { Locale._instance = new Locale(); }
            return Locale._instance;
        }


        /** 
         * @private
         */
        private static _instance: Locale;


        /** 
         * @private
         */
        constructor() {
            super();
        }


        private _language: string = Locale.ENGLISH;
        public set language(value: string) {
            this._language = value;
        }
        public get language(): string {
            return this._language
        }
        public static get ENGLISH(): string { return 'en' };

        public static get RUSSIAN(): string {return 'ru';}

        public static get GEORGIAN(): string { return 'ka'; }    
    }
}