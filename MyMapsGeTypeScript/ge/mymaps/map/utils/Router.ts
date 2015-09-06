///<reference path="../../../../ru/flaps/events/EventDispatcher"/>
module ge.mymaps.map.utils {

    /***
     * MyMpas ge router service
     *
     */
    export class Router extends ru.flaps.events.EventDispatcher
    {

        public static get START_CHANGED():string {return 'START_CHANGED'};


        public static get END_CHANGED(): string { return 'END_CHANGED' };

        public static get CALCULATED(): string { return 'calculated' };

        constructor()
        {
            super();
        }


        private _start:any

        /**
         *
         * Set start point of the router
         */
        public set start(value:any)
        {
            this._start = value;
        }

        public get start():any{
            return this._start
        }







        private _end:any

        /**
         *
         * Set end point of the router
         */
        public set end(value:any)
        {
            this._start = value;
        }

        public get end():any{
            return this._start
        }


        /**
         *
         * Available to build route path
         */
        public isAvailable():boolean
        {
           return this.start != null && this.end != null
        }




        public calculate(): void
        {

        }
    }
}