declare class MapTypesProvider extends ru.flaps.events.EventDispatcher {
    static BING_KEY: string;
    static GOOGLE_KEY: string;
    static WIKIMAPIA_KEY: string;
    /**
     * Map type was changed
     * @data - MapType object;
     */
    static TYPE_CHANGED: string;
    private _types;
    /**
     * Available map types for this map.
     */
    types: Array<MapType>;
    private geoManager;
    constructor();
    private _mapType;
    /**
     * Main map type, as a pane at the bottom;
     */
    mapType: MapType;
    private _showWikimapiOverlay;
    showWikimapiaOverlay: boolean;
    showWikimapiOverlay: boolean;
}
