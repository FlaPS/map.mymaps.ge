declare module ge.mymaps.map.events {
    class LongPressInfo {
        event: L.LeafletMouseEvent;
        mapObject: ge.mymaps.map.data.GeOrganization;
        constructor(event: L.LeafletMouseEvent, mapObject: ge.mymaps.map.data.GeOrganization);
    }
}
