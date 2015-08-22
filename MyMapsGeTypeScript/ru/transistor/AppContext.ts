/// <reference path="../../ru/flaps/events/EventDispatcher.ts" />
/// <reference path="../../ru/transistor/view/ItemList.ts" />
/// <reference path="../../ru/transistor/view/EditForm.ts" />
/// <reference path="../../ru/transistor/view/LoginForm.ts" />

class AppContext
{
    public static GATEWAY: string = 'http://as3.ru/transistor/backend/JSONGateway.php';
    private static _instance: AppContext;

    public static get instance(): AppContext
    {
        return AppContext._instance;
    }


    public model: AppModel;


    public list: any = <any> ItemList.create();
    public loginForm: any = <any> LoginForm.create();
   

    public loginController: LoginController = new LoginController();
    public listController: ListController = new ListController();


    /**
     * Map some values like injection framework
     */
    constructor(element: HTMLElement)
    {
        /**
        
         * Initiate cotext as a singleton
         */
        if (AppContext._instance) throw new Error("AppContext is singleton");


        AppContext._instance = this;

        /**
         * Define backend aliases
         */
        ObjectVO.registerAlias('ObjectVO'   , ObjectVO);
        ObjectVO.registerAlias('ErrorVO'    , ErrorVO);
        ObjectVO.registerAlias('ProfileVO'  , ProfileVO);
        ObjectVO.registerAlias('ItemVO'     , ItemVO);
        ObjectVO.registerAlias('RequestVO'  , RequestVO);
        ObjectVO.registerAlias('ResponseVO' , ResponseVO);


        /**
         * Set up model
         */
        this.model = new AppModel()
        this.model.gateway = AppContext.GATEWAY;


        /** 
         * Init views
         */
        document.body.appendChild(this.list);
        document.body.appendChild(this.loginForm);
        this.list.style.display     =  'none';
        this.loginForm.style.display = 'none';


        /**
         * Set up controllers
         */
        this.loginController.setUp  (this.loginForm, this.model);
        this.listController .setUp  (this.list, this.model);

        this.loginController.start();

        //AJAXPreloadOverlay
    }

    /**
     * Implement some idle features
     */
}

