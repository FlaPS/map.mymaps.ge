declare module ge.mymaps.map.core {
    class LatLng implements L.LatLng {
        lat: number;
        lng: number;
        private _lLatLng;
        constructor(lat: number, lng: number);
        /**
         * Distance to other LatLng
         */
        distanceTo(other: ge.mymaps.map.core.LatLng): number;
        /**
         *Are this points equals?
         */
        equals(other: ge.mymaps.map.core.LatLng): boolean;
        /**
         * Wrap this point
         */
        wrap(lat: number, lng: number): ge.mymaps.map.core.LatLng;
    }
}
