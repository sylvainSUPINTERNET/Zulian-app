import React from 'react';

/**
 * Generate for select the options list
 * @param items
 * @param fieldValue
 * @param fieldDisplay
 * @param defaultValue
 */
export const generateOptionFieldsList = (items, fieldValue, fieldDisplay, defaultValue) => {

    let options = [];

    let defaultOptions = defaultValue ? <option value={defaultValue}> {defaultValue} </option> : null;
    if ( defaultOptions !== null ) {
        options = [...options, <option selected value={defaultValue} key={-1}> {defaultValue} </option>]
    }

    for (let x in items) {
        options = [...options,
            <option key={x} value={items[x][fieldValue]}>
                {items[x][fieldDisplay]}
            </option>]
    }



    return options;
};
