module ge.mymaps.map.data {
    export class GeOrganization extends ge.mymaps.map.data.MarkerMapObject {
        constructor(

            id: number = -1,
            name: string = '',
            lat: number = 0,
            lng: number = 0
            ) {
            super( lat, lng);
        }
        public distance: number;
        public updateMarker():void {
            super.updateMarker()
            this.distance = ge.mymaps.map.utils.Locator.instance.getDistanceTo(this.lat, this.lng);
            this.marker.bindPopup(this.name + ' <br/>distance:' + Math.ceil(this.distance) + ' метров');
        }
    }
}