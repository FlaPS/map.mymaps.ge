declare class MapType {
    /**
        * Id of map Layer
        */
    id: number;
    /**
        * Instance of L.ILayer
        */
    layer: L.ILayer;
    /**
        * Name of layer for UI bindings
        */
    name: string;
    constructor(
        /**
            * Id of map Layer
            */
        id?: number, 
        /**
            * Instance of L.ILayer
            */
        layer?: L.ILayer, 
        /**
            * Name of layer for UI bindings
            */
        name?: string);
}
