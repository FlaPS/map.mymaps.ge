declare class TassAppModel extends ru.flaps.events.EventDispatcher {
    gateway: string;
    /**
     * Login success
     */
    static TYPES_LOADED: string;
    /**
     * Carousels loaded
     */
    static CAROUSELS_LOADED: string;
    /**
     * Some ErrorVO was accured on the backend reagarding to you reqeust
     */
    static ERROR: string;
    /**
     * Backend is unavailable
     */
    static CONNECTION_ERROR: string;
    static TYPES_GATEWAY: string;
    static CAROUSELS_GATEWAY: string;
    constructor(gateway?: string);
    seedMockData(): void;
    private _carousels;
    carousels: Array<CarouselVO>;
    private _types;
    types: Array<TypeVO>;
    requestTypes(): void;
    private requestItemsResult(data);
    requestAllCarousels(): void;
    private requestCarouselsResult(data);
    /**
     * Extract responce and handle errors in case of.
     * @rerutrn Mapped raw result or null in case of ErrorVOs
     */
    private extractResult(data);
    /**
     * Request data via POST method
     */
    private requestPost(requestObj, JQsuccessHandler?, JQfaultHandler?, urlPath?);
    private defaultAjaxSuccess(data);
    private defaultAjaxError(data);
}
