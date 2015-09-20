var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var LoginController = (function (_super) {
    __extends(LoginController, _super);
    function LoginController() {
        _super.apply(this, arguments);
    }
    LoginController.prototype.setUp = function (view, model) {
        _super.prototype.setUp.call(this, view, model);
    };
    /**
     *
     */
    LoginController.prototype.start = function () {
        _super.prototype.start.call(this);
        this.view.addEventListener(LoginForm.LOGIN_TRIGGERED, this.loginHandler.bind(this));
        this.view.addEventListener(LoginForm.REGISTER_TRIGGERED, this.registerHandler.bind(this));
        this.model.addEventListener(AppModel.LOGIN_SUCCESS, this.loginSuccess.bind(this));
    };
    LoginController.prototype.loginHandler = function (e) {
        this.model.signIn(this.context.loginForm.login, this.context.loginForm.password);
    };
    LoginController.prototype.registerHandler = function (e) {
        this.model.signUp(this.context.loginForm.login, this.context.loginForm.password, this.context.loginForm.confirm);
    };
    LoginController.prototype.loginSuccess = function () {
        this.stop();
    };
    return LoginController;
})(BaseController);
//# sourceMappingURL=LoginController.js.map