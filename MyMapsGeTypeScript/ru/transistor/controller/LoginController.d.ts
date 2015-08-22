declare class LoginController extends BaseController {
    setUp(view: any, model: AppModel): void;
    /**
     *
     */
    start(): void;
    private loginHandler(e);
    private registerHandler(e);
    private loginSuccess();
}
