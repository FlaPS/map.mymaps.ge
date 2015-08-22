var MapType = (function () {
    function MapType(
        /**
            * Id of map Layer
            */
        id, 
        /**
            * Instance of L.ILayer
            */
        layer, 
        /**
            * Name of layer for UI bindings
            */
        name) {
        if (id === void 0) { id = -1; }
        if (layer === void 0) { layer = null; }
        if (name === void 0) { name = 'No name Layer'; }
        this.id = id;
        this.layer = layer;
        this.name = name;
    }
    return MapType;
})();
//# sourceMappingURL=MapType.js.map