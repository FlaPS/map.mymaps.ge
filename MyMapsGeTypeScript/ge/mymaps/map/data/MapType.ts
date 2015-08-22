class MapType {
    constructor(
            /**
                * Id of map Layer
                */
            public id: number = -1,

            /**
                * Instance of L.ILayer
                */
            public layer: L.ILayer = null,

            /**
                * Name of layer for UI bindings
                */
            public name: string = 'No name Layer'
            )
    {


    }

}