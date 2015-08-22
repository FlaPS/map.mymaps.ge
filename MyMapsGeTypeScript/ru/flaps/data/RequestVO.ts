class RequestVO extends ObjectVO
{
    constructor(service:string, method:string, params:Array<any> = [])
    {
        super();
        this.service = service;
        this.method = method;
        this.params = params;
    }
    public service:string;

    public method:string;

    public params:Array<any>;

    public _explicitType:string = "RequestVO";
}