/// <reference path="../../../bower_components/polymer-ts/polymer-ts.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var LoginForm = (function (_super) {
    __extends(LoginForm, _super);
    function LoginForm() {
        _super.apply(this, arguments);
        //public
        this.login = "";
        this.password = "";
        this.confirm = "";
        this.registerMode = false;
    }
    //Debug lifecycle info
    LoginForm.prototype.created = function () { console.log("LogiForm created"); };
    LoginForm.prototype.attached = function () { console.log("LoginForm attached"); };
    LoginForm.prototype.detatched = function () { console.log('LogiForm detached'); };
    //UITriggers
    LoginForm.prototype.onGoToRegisterMode = function (e) { this.registerMode = true; };
    LoginForm.prototype.onGoToSignUpMode = function (e) { this.registerMode = false; };
    //EventTriggers
    LoginForm.prototype.onLoginTriggered = function (e) {
        this['dispatchEvent'](new Event(LoginForm.LOGIN_TRIGGERED));
    };
    LoginForm.prototype.onRegisterTriggered = function (obj) {
        if (this.password != this.confirm) {
            window.alert("password doesn't match");
        }
        else {
            console.log('passwords matches');
            this['dispatchEvent'](new Event(LoginForm.REGISTER_TRIGGERED));
        }
    };
    LoginForm.LOGIN_TRIGGERED = 'loginTriggered';
    LoginForm.REGISTER_TRIGGERED = 'registerTriggered';
    __decorate([
        property({ type: String, value: "", notify: true, reflectToAttribute: true }), 
        __metadata('design:type', String)
    ], LoginForm.prototype, "login");
    __decorate([
        property({ type: String, value: "", notify: true, reflectToAttribute: true }), 
        __metadata('design:type', String)
    ], LoginForm.prototype, "password");
    __decorate([
        property({ type: String, value: "", notify: true }), 
        __metadata('design:type', String)
    ], LoginForm.prototype, "confirm");
    __decorate([
        property({ type: Boolean, value: "", notify: true }), 
        __metadata('design:type', Boolean)
    ], LoginForm.prototype, "registerMode");
    LoginForm = __decorate([
        component("login-form"), 
        __metadata('design:paramtypes', [])
    ], LoginForm);
    return LoginForm;
})(polymer.Base);
LoginForm.register();
//# sourceMappingURL=LoginForm.js.map