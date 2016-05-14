'use strict';

let Utils = function() {};

let _overlap = (itemA, itemB) => {
    return !(
        (itemA.end < itemB.start) || (itemA.start > itemB.end)
    );
};

Utils.prototype = {

    consolidateOverlaping: ( paramArray ) => {
        return paramArray.reduce((acc, item, index) => {
            let _keys = Object.keys(acc);
            if( _keys.length === 0 ) {
                acc[`range${index}`] = new Array(item);
            }
            else {
                let _added = false;
                _keys.forEach((_key) => {
                    if( !_added ) {
                        let _arr = acc[_key];
                        _arr.forEach((_item) => {
                            if( !_added && _overlap(item, _item) ) {
                                _added = true;
                                _arr.push(item);
                            }
                        });
                    }
                });

                if( !_added ) {
                    acc[`range${index}`] = [item];
                }
            }

            return acc;
        }, {});
    }

};

export default (new Utils());
