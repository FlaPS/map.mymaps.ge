module ge.mymaps.map.core {
    export class LatLng implements L.LatLng
    {
        private _lLatLng: L.LatLng;
        constructor(public lat: number, public lng: number) {
            this._lLatLng = L.latLng(lat, lng);
        
        }


        /**
         * Distance to other LatLng
         */
        public distanceTo(other: ge.mymaps.map.core.LatLng): number {
            return this._lLatLng.distanceTo(other)
        }

        
        /**
         *Are this points equals?
         */
        public equals(other: ge.mymaps.map.core.LatLng): boolean {
            return this._lLatLng.equals(other);


        }


        /**
         * Wrap this point
         */
        public wrap(lat: number, lng: number): ge.mymaps.map.core.LatLng {
            var l: L.LatLng = this._lLatLng.wrap(lat, lng);
            return new LatLng(l.lat, l.lng);
        }

    }
}