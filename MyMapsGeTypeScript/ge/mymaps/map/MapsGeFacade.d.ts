declare class MapsGeFacade extends polymer.Base implements polymer.Element {
    /**
     * @see L.LatLng  http://leafletjs.com/reference.html#latlng
     */
    static READY: string;
    organizations: Array<ge.mymaps.map.data.GeOrganization>;
    private _map;
    attached(): void;
    private gmLoadedHandler();
    geoLiveUpdateHandler(): void;
    private _markerCluster;
    locator: ge.mymaps.map.utils.Locator;
    addOrganization(obj: ge.mymaps.map.data.GeOrganization): ge.mymaps.map.data.GeOrganization;
    removeOrganization(obj: ge.mymaps.map.data.GeOrganization): ge.mymaps.map.data.GeOrganization;
    clearOrganizations(): void;
}
