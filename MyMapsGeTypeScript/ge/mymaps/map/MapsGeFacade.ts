@component("maps-ge-facade")
class MapsGeFacade extends polymer.Base implements polymer.Element {

    /**
     * @see L.LatLng  http://leafletjs.com/reference.html#latlng
     */
    public static get READY(): string { return "facadeReady"; }


    public organizations: Array<ge.mymaps.map.data.GeOrganization> = [];

     private   _map: ge.mymaps.map.view.GeMapView 
    attached()
    {
        console.log(this);
        console.log('maps-ge-facade attached()');
        
        window['gmloaded'] = this.gmLoadedHandler.bind(this);
        if (window['google'] && window['google']['maps']) {
            setTimeout(window['gmloaded'], 200);
        }
     }
    private gmLoadedHandler():void
    {
        this.locator = ge.mymaps.map.utils.Locator.instance;
        this.locator.updateLiveLocation();
        this.locator.addEventListener(ge.mymaps.map.utils.Locator.GEO_LIVE_UPDATE, this.geoLiveUpdateHandler.bind(this));
        console.log('google maps loaded');

        console.log('web components ready ');
        this._map = <any>document['getElementById']('mapView');
        this._map.initialize();
   
        var list: MapTypeList = <any>document.getElementById('typesList');

        list.setMapTypesProvider(this._map.mapTypesProvider);
  
        this._markerCluster = new L['MarkerClusterGroup']();
        this._map.leafletMap.addLayer(this._markerCluster);
        /*var list = document.getElementById('list');
        list.mapTypesProvider = map.mapTypesProvider;*/
        this.fire(MapsGeFacade.READY);
    }


    public geoLiveUpdateHandler(): void {
        var i: number = 0;

        while (i < this.organizations.length) {
         this.organizations[i].updateMarker();
            i++;
        }
    }

    private _markerCluster: any;

    public locator: ge.mymaps.map.utils.Locator;
    public addOrganization(obj: ge.mymaps.map.data.GeOrganization): ge.mymaps.map.data.GeOrganization
    {
        this.organizations.push(obj);
        this._markerCluster.addLayer(obj.marker)
        return obj;
    }

    public removeOrganization(obj: ge.mymaps.map.data.GeOrganization): ge.mymaps.map.data.GeOrganization {
        this.organizations.splice(this.organizations.indexOf(obj), 1);
        this._markerCluster.removeLayer(obj.marker)
        return obj;
    }

    public clearOrganizations(): void {
        while (this.organizations.length > 0) {
            this.removeOrganization(this.organizations[0]);
        }
    }


    
}
MapsGeFacade.register(); 