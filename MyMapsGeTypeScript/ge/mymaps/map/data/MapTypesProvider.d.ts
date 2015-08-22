declare class MapTypesProvider extends ru.flaps.events.EventDispatcher {
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
    constructor();
    private _mapType;
    /**
     * Main map type, as a pane at the bottom;
     */
    mapType: MapType;
}
