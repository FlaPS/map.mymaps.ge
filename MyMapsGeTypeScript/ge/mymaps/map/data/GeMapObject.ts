 module ge.mymaps.map.data {
    export class GeMapObject extends ru.flaps.events.EventDispatcher
    {
        constructor(
            public id: number = -1,
            public name:string = ''
            ) {
            super();
        }
    }
}