/// <reference path="../../../bower_components/polymer-ts/polymer-ts.ts" />

@component("login-form")
class LoginForm extends polymer.Base implements polymer.Element
{
   
    public static LOGIN_TRIGGERED      : string    = 'loginTriggered';
    public static REGISTER_TRIGGERED   : string    = 'registerTriggered';

    //public
    @property({ type: String, value: "", notify: true, reflectToAttribute: true})
    public login: string = "";
    @property({ type: String, value: "", notify: true, reflectToAttribute: true})
    public password: string = "";
    @property({ type: String, value: "", notify: true })
    public confirm: string = "";
    @property({ type: Boolean, value: "", notify: true })
    public registerMode: boolean = false;



    //Debug lifecycle info
    created()   {console.log("LogiForm created")    ;}
    attached()  {console.log("LoginForm attached")  ;}
    detatched() {console.log('LogiForm detached')   ;}


    //UITriggers
    public onGoToRegisterMode   (e: any): void{ this.registerMode = true    ;}
    public onGoToSignUpMode     (e: any): void{this.registerMode = false    ;}







    //EventTriggers
    public onLoginTriggered(e: any): void
    {
        this['dispatchEvent'](new Event(LoginForm.LOGIN_TRIGGERED));
    }

    public onRegisterTriggered(obj:any)
    {
        if (this.password != this.confirm)
        {
            window.alert("password doesn't match");
        }
        else
        {
            console.log('passwords matches');
            this['dispatchEvent'](new Event(LoginForm.REGISTER_TRIGGERED));
        }
    }

 


 
}
LoginForm.register();
