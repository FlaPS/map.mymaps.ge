module ge.mymaps.map.data {
    /**
     * basic functionality for user location depending functions.
     * This class is a singleton
     * Use ge.mymaps.map.utils.Locator.instacne for event listening and method closures
     * ei. ge.mymaps.map.utils.Locator.instacne.updateLocation();
     * ge.mymaps.map.utils.Locator.instacne.addEventListener(ge.mymaps.map.utils.Locator.GEO_UPDATE, geoUpdateEvetHandler
     */
    export class LocatorMapObject extends ge.mymaps.map.data.MarkerMapObject
    {

        constructor(lat: number = 0, lng: number = 0) {
            super(lat, lng)
            this.iconUrl = "http://www.primehomes.lk/images/map_man.gif"
            this.iconRetinaUrl = "http://www.primehomes.lk/images/map_man.gif"
        }

        /**
         * Singleton's instance
         */
        
    }
}