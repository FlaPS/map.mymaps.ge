declare class RequestVO extends ObjectVO {
    constructor(service: string, method: string, params?: Array<any>);
    service: string;
    method: string;
    params: Array<any>;
    _explicitType: string;
}
