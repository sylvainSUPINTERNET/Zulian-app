/**
 * Recycle the list of thick
 * @param thickList
 * @param thickerObj
 * @param sizeMax
 * @returns {*[]}
 */
export const pushBack = (thickList, thickerObj, sizeMax) => {

    if ( thickList.length === sizeMax ) {
        console.log("her");
        thickList.splice(thickList.length - 1, 1);
        thickList.push(thickerObj);
        console.log(thickList)
    } else {
        thickList = [...thickList, thickerObj]
    }
    return thickList;
}


