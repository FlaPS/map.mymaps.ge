/// <reference path="../flaps/events/EventDispatcher.d.ts" />
/// <reference path="view/CarouselList.d.ts" />
/// <reference path="data/TassAppModel.d.ts" />
/// <reference path="data/CarouselVO.d.ts" />
/// <reference path="data/TypeVO.d.ts" />
/**
 * In this small case current context implement some controller funtions for model and view
 */
declare class TassAppContext {
    static GATEWAY: string;
    private _model;
    list: any;
    constructor();
    private crouselsLoadedHandler();
}
