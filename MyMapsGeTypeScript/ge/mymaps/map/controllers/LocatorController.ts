module ge.mymaps.map.controllers {
    export class LocatorController extends ru.flaps.events.EventDispatcher
    {

        /**
         * Singleton's instance
         */
        public static get instance(): ge.mymaps.map.controllers.LocatorController {
            if (LocatorController._instance == null) { LocatorController._instance = new LocatorController(); }
            return LocatorController._instance;
        }


        /** 
         * @private
         */
        private static _instance: LocatorController;


        /** 
         * @private
         */
        constructor() {
            super();
        }
    }
}