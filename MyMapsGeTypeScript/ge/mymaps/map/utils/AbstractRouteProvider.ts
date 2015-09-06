module ge.mymaps.map.utils
{
    export class AbstractRouteProvider extends ru.flaps.events.EventDispatcher
    {
        public static get COMPLETE(): string { return 'complete'    };

        public static get ERROR()   : string { return 'error'       };


    }
}