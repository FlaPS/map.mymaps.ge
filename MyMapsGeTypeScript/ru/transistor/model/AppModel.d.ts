/// <reference path="ItemVO.d.ts" />
/// <reference path="ProfileVO.d.ts" />
/// <reference path="../../flaps/events/EventDispatcher.d.ts" />
/// <reference path="../../../Scripts/typings/jquery/jquery.d.ts" />
declare class AppModel extends ru.flaps.events.EventDispatcher {
    gateway: string;
    /**
     * Login success
     */
    static LOGIN_SUCCESS: string;
    /**
     * Login success
     */
    static REGISTER_SUCCESS: string;
    /**
     * Login Error
     */
    static LOGIN_ERROR: string;
    /**
     * Login success
     */
    static LOGOUT: string;
    /**
     * Login success
     */
    static DATA_LOADED: string;
    /**
     * Login success
     */
    static ITEM_ADDED: string;
    /**
    * Login success
    */
    static ITEM_UPDATED: string;
    /**
    * Login success
    */
    static ITEM_REMOVED: string;
    /**
     * Wrong authKey token
     */
    static AUTH_ERROR: string;
    static ERROR: string;
    static CONNECTION_ERROR: string;
    static SAVE_SUCCESS: string;
    static DATA_UPDATE: string;
    constructor(gateway?: string);
    private _authKey;
    authKey: string;
    signIn(login: string, password: string): void;
    signUp(login: string, password: string, confirm: string): void;
    private signInResult(data);
    items: Array<ItemVO>;
    addItem(item: ItemVO): void;
    private addItemResult(data);
    removeItem(item: ItemVO): void;
    private removeItemResult(data);
    updateItem(item: ItemVO): void;
    private updateItemResult(data);
    requestItems(): void;
    private requestItemsResult(data);
    private extractResult(data);
    private request(requestObj, JQsuccessHandler?, JQfaultHandler?);
    private defaultAjaxSuccess(data);
    private defaultAjaxError(data);
}
