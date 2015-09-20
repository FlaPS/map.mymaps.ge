/// <reference path="MarkerMapObject.d.ts" />
declare module ge.mymaps.map.data {
    class GeOrganization extends ge.mymaps.map.data.MarkerMapObject {
        constructor(id?: number, name?: string, lat?: number, lng?: number);
        distance: number;
        updateMarker(): void;
    }
}
