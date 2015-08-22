/// <reference path="../../ru/flaps/events/EventDispatcher.ts" />
/// <reference path="../../ru/transistor/view/ItemList.ts" />
/// <reference path="../../ru/transistor/view/EditForm.ts" />
/// <reference path="../../ru/transistor/view/LoginForm.ts" />
var AppContext = (function () {
    /**
     * Map some values like injection framework
     */
    function AppContext(element) {
        this.list = ItemList.create();
        this.loginForm = LoginForm.create();
        this.loginController = new LoginController();
        this.listController = new ListController();
        /**
        
         * Initiate cotext as a singleton
         */
        if (AppContext._instance)
            throw new Error("AppContext is singleton");
        AppContext._instance = this;
        /**
         * Define backend aliases
         */
        ObjectVO.registerAlias('ObjectVO', ObjectVO);
        ObjectVO.registerAlias('ErrorVO', ErrorVO);
        ObjectVO.registerAlias('ProfileVO', ProfileVO);
        ObjectVO.registerAlias('ItemVO', ItemVO);
        ObjectVO.registerAlias('RequestVO', RequestVO);
        ObjectVO.registerAlias('ResponseVO', ResponseVO);
        /**
         * Set up model
         */
        this.model = new AppModel();
        this.model.gateway = AppContext.GATEWAY;
        /**
         * Init views
         */
        document.body.appendChild(this.list);
        document.body.appendChild(this.loginForm);
        this.list.style.display = 'none';
        this.loginForm.style.display = 'none';
        /**
         * Set up controllers
         */
        this.loginController.setUp(this.loginForm, this.model);
        this.listController.setUp(this.list, this.model);
        this.loginController.start();
        //AJAXPreloadOverlay
    }
    Object.defineProperty(AppContext, "instance", {
        get: function () {
            return AppContext._instance;
        },
        enumerable: true,
        configurable: true
    });
    AppContext.GATEWAY = 'http://as3.ru/transistor/backend/JSONGateway.php';
    return AppContext;
})();
//# sourceMappingURL=AppContext.js.map