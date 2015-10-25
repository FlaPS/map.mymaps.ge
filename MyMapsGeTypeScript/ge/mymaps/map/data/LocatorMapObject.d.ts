declare module ge.mymaps.map.data {
    /**
     * basic functionality for user location depending functions.
     * This class is a singleton
     * Use ge.mymaps.map.utils.Locator.instacne for event listening and method closures
     * ei. ge.mymaps.map.utils.Locator.instacne.updateLocation();
     * ge.mymaps.map.utils.Locator.instacne.addEventListener(ge.mymaps.map.utils.Locator.GEO_UPDATE, geoUpdateEvetHandler
     */
    class LocatorMapObject extends ge.mymaps.map.data.MarkerMapObject {
        constructor(lat?: number, lng?: number);
    }
}
