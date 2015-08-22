/// <reference path="../../../bower_components/polymer-ts/polymer-ts.d.ts" />
declare class LoginForm extends polymer.Base implements polymer.Element {
    static LOGIN_TRIGGERED: string;
    static REGISTER_TRIGGERED: string;
    login: string;
    password: string;
    confirm: string;
    registerMode: boolean;
    created(): void;
    attached(): void;
    detatched(): void;
    onGoToRegisterMode(e: any): void;
    onGoToSignUpMode(e: any): void;
    onLoginTriggered(e: any): void;
    onRegisterTriggered(obj: any): void;
}
