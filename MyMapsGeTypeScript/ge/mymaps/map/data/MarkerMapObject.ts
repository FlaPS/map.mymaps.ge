module ge.mymaps.map.data {
    export class MarkerMapObject extends ge.mymaps.map.data.GeMapObject {
        constructor(public lat: number = 0,
                    public lng:number = 0) {
            super()
        
                    this.latLng = L.latLng(lat, lng);
            this._marker = L.marker(this.latLng);
            this.updateMarker();
        }
        public get latLng(): L.LatLng {
            return new L.LatLng(this.lat, this.lng)
        }
        public set latLng(value: L.LatLng) {
            this.lat = value.lat
            this.lng = value.lng
            if (this._marker)
                this.updateMarker()
        }
        private _marker: L.Marker;

        public get marker(): L.Marker
        {
            return this._marker
        }



        public iconUrl          : string = "http://mymaps.ge/images/marker-icon.png"
        public iconRetinaUrl    : string = "http://mymaps.ge/images/marker-icon-2х.png"
        public updateMarker(): void {
        
        
            this._marker.setLatLng(this.latLng);
          
            //  var icon: L.Icon
            this._marker.setIcon(new L.Icon.Default());
            var iconOptions: L.IconOptions = {}
            iconOptions.iconUrl =this.iconUrl
            iconOptions.iconRetinaUrl= this.iconRetinaUrl
            
            var icon: L.Icon = new L.Icon(iconOptions)
            this._marker.setIcon(icon);
            this._marker.update();
        }
    }
}