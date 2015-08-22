/// <reference path="../flaps/events/EventDispatcher.d.ts" />
/// <reference path="view/ItemList.d.ts" />
/// <reference path="view/EditForm.d.ts" />
/// <reference path="view/LoginForm.d.ts" />
declare class AppContext {
    static GATEWAY: string;
    private static _instance;
    static instance: AppContext;
    model: AppModel;
    list: any;
    loginForm: any;
    loginController: LoginController;
    listController: ListController;
    /**
     * Map some values like injection framework
     */
    constructor(element: HTMLElement);
}
