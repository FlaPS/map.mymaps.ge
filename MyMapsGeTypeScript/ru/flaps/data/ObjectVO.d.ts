declare class ObjectVO {
    _explicitType: string;
    constructor();
    id: number;
    private static aliases;
    static registerAlias(alias: string, cls: any): void;
    /**
     * Maps raw object into strong typed TypeScript instance Class alias defined by "_explicitType" property
     */
    static mapRawObject(obj: Object): any;
}
