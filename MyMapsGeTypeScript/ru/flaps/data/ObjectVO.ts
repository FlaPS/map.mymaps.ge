class ObjectVO {
    public _explicitType: string;
    constructor() {
        this._explicitType= 'ObjectVO';
    }


    public id: number;

    private static aliases: any = {};

    public static registerAlias(alias:string, cls:any):void
	{
            ObjectVO.aliases[alias] = cls;
    }
    
    /**
     * Maps raw object into strong typed TypeScript instance Class alias defined by "_explicitType" property
     */
    public static mapRawObject(obj:Object): any
    {
        var result: any
       // console.log('map raw obj'+obj);
        if (obj != null
            &&
            obj != undefined
            )
        {
            if (Array.isArray(obj)) {
                result = [];
                for (var prop in obj) {
                    var mapped:any = ObjectVO.mapRawObject(obj[prop])
                    result[prop] = mapped;
                }
            }
            else if (
                obj['_explicitType'] != null
                &&
                obj['_explicitType'] != undefined
                &&
                obj['_explicitType'] != '') {
                console.log(ObjectVO.aliases['ResponseVO']);
                console.log(obj['_explicitType']);
                result = new ObjectVO.aliases[obj['_explicitType']]();;
                console.log('new result ' + new ObjectVO.aliases[obj['_explicitType']]);

                for (var prop in obj) {
                    result[prop] = ObjectVO.mapRawObject(obj[prop]);
                }
            }
      
            
            else {
                result = obj;
            }
            return result;
        }
        
        return obj;
    }
			
   /* public toString(): any
    {
        return JSON.stringify(this);
    }*/
} 