var ObjectVO = (function () {
    function ObjectVO() {
        this._explicitType = 'ObjectVO';
    }
    ObjectVO.registerAlias = function (alias, cls) {
        ObjectVO.aliases[alias] = cls;
    };
    /**
     * Maps raw object into strong typed TypeScript instance Class alias defined by "_explicitType" property
     */
    ObjectVO.mapRawObject = function (obj) {
        var result;
        // console.log('map raw obj'+obj);
        if (obj != null
            &&
                obj != undefined) {
            if (Array.isArray(obj)) {
                result = [];
                for (var prop in obj) {
                    var mapped = ObjectVO.mapRawObject(obj[prop]);
                    result[prop] = mapped;
                }
            }
            else if (obj['_explicitType'] != null
                &&
                    obj['_explicitType'] != undefined
                &&
                    obj['_explicitType'] != '') {
                console.log(ObjectVO.aliases['ResponseVO']);
                console.log(obj['_explicitType']);
                result = new ObjectVO.aliases[obj['_explicitType']]();
                ;
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
    };
    ObjectVO.aliases = {};
    return ObjectVO;
})();
//# sourceMappingURL=ObjectVO.js.map