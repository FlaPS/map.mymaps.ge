
@component("maps-ge-facade")
class MapsGeFacade extends polymer.Base implements polymer.Element {
    attached() {
        console.log(this);
        console.log('maps-ge-facade attached()');
        
        window['gmloaded'] = function () {
            console.log('google maps loaded');

            console.log('web components ready ');
            var map: TbilisiMapView = <any>document['getElementById']('mapView');
            map.initialize();
            var list: MapTypeList  = <any>document.getElementById('typesList');

            list.setMapTypesProvider(map.mapTypesProvider);

            /*var list = document.getElementById('list');
            list.mapTypesProvider = map.mapTypesProvider;*/
        }
        if (window['google'] && window['google']['maps']) {
            setTimeout(window['gmloaded'], 200);
        }
    }
}
MapsGeFacade.register(); 