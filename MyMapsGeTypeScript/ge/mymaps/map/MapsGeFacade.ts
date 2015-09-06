@component("maps-ge-facade")
class MapsGeFacade extends polymer.Base implements polymer.Element {

    /**
     * Entrie map ready event. Use one to hide default UI and set initial layers
     * @see L.LatLng      http://leafletjs.com/reference.html#latlng
     */
    public static get READY(): string { return "facadeReady"; }


    public organizations: Array<ge.mymaps.map.data.GeOrganization> = [];

    private _mapView: ge.mymaps.map.view.GeMapView
    attached()
    {
        console.log(this);
        console.log('maps-ge-facade attached()');

        window['gmloaded'] = this.gmLoadedHandler.bind(this);
        if (window['google'] && window['google']['maps']) {
            setTimeout(window['gmloaded'], 200);
        }
     }
     private list: MapTypeList;
    private gmLoadedHandler():void
    {
        window['gmloaded'] = function () { };
        this.locator = ge.mymaps.map.utils.Locator.instance;
        this.locator.updateLiveLocation();
        this.locator.addEventListener(ge.mymaps.map.utils.Locator.GEO_LIVE_UPDATE, this.geoLiveUpdateHandler.bind(this));
        console.log('google maps loaded');

        console.log('web components ready ');
        this._mapView = <any>document['getElementById']('mapView');
        this._mapView.initialize();

       this.list = <any>document.getElementById('typesList');

        this.list.setMapTypesProvider(this._mapView.mapTypesProvider);

        this._markerCluster = this.mapView.markerCluster;
        /*var list = document.getElementById('list');
        list.mapTypesProvider = map.mapTypesProvider;*/
        this.fire(MapsGeFacade.READY);
    }

    public get mapView(): ge.mymaps.map.view.GeMapView {
        return this._mapView;
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
        obj.marker['mapObject'] = obj;
        this._markerCluster.addLayer(obj.marker)
        return obj;
    }

    public removeOrganization(obj: ge.mymaps.map.data.GeOrganization): ge.mymaps.map.data.GeOrganization {
        this.organizations.splice(this.organizations.indexOf(obj), 1);
        this._markerCluster.removeLayer(obj.marker)
        return obj;
    }

    public clearOrganizations(): void
    {
        while (this.organizations.length > 0)
        {
            this.removeOrganization(this.organizations[0]);
        }
    }

    private _showMapUI: boolean = true;
    public set showMapUI(value: boolean)
    {
        this._showMapUI = value
        if (value)
        {
            this.list.style.display = "block";
        }
        else {

            this.list.style.display = "none";
        }
    }


    public get showMapUI(): boolean {
        return this._showMapUI
    }



}
MapsGeFacade.register();