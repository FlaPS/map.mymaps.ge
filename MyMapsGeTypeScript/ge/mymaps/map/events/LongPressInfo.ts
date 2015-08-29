
module ge.mymaps.map.events {
    export class LongPressInfo {
        constructor(public event: L.LeafletMouseEvent,
                    public mapObject: ge.mymaps.map.data.GeOrganization) {
        }
    }
}