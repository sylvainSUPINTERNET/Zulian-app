/**
 * Recycle the list of thick
 * @param thickList
 * @param thickerObj
 * @param sizeMax
 * @returns {*[]}
 */
export const pushBack = (thickList, thickerObj, sizeMax) => {

    if (thickerObj.best_ask) { // check if best_ask from wss feed is not undefined, else ignore it
        if ( thickList.length === sizeMax ) {
            thickList.pop();
            thickList = [thickerObj, ...thickList]
        } else {
            thickList = [...thickList, thickerObj]
        }
    }

    return thickList
}


