declare module ge.mymaps.map.data {
    class GeMapObject extends ru.flaps.events.EventDispatcher {
        id: number;
        name: string;
        constructor(id?: number, name?: string);
    }
}
