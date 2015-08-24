module ge.mymaps.map.data {
    export class GeOrganization extends ge.mymaps.map.data.GeMapObject {
        constructor(
            id: number = -1,
            name: string = '',
            public lat: number = 0,
            public lng: number = 0
            ) {
            super(id, name);
            this.latLng = L.latLng(lat, lng);
            this._marker = L.marker(this.latLng);
            this.updateMarker();
        }
        public latLng: L.LatLng;
        private _marker: L.Marker;
        public get marker(): L.Marker {
            return this._marker
        }
        public updateMarker(): void {
            this._marker.bindPopup(this.name);
            this._marker.setLatLng(this.latLng);
          //  var icon: L.Icon
            this._marker.setIcon(new L.Icon.Default());
            this._marker.update();
        }
    }
}