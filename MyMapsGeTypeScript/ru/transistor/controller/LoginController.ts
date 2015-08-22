class LoginController extends BaseController
{


    public setUp(view: any, model: AppModel): void {
        super.setUp(view, model);
    }

    /**
     * 
     */
    public start(): void
    {
        super.start();
        this.view.addEventListener  (   LoginForm.LOGIN_TRIGGERED,this.loginHandler.bind(this));
        this.view.addEventListener  (LoginForm.REGISTER_TRIGGERED, this.registerHandler.bind(this));
        this.model.addEventListener (AppModel.LOGIN_SUCCESS, this.loginSuccess.bind(this));
    }



    private loginHandler(e: Event): void
    {
        this.model.signIn(  this.context.loginForm.login,
                            this.context.loginForm.password);
    }


    private registerHandler(e: Event): void {
        this.model.signUp(  this.context.loginForm.login,
                            this.context.loginForm.password,
                            this.context.loginForm.confirm);
    }



    private loginSuccess(): void
    {
        this.stop();
    }
} 