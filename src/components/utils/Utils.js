'use strict';

/**
 * Eg : /assets/exemple myTest.jpg
 * @param dirLookingFor
 * @param fileNameWithExtension
 * @returns {string}
 */
export const generateAssetsPath = ( dirLookingFor, fileNameWithExtension) => {
    return `${process.env.PUBLIC_URL}${dirLookingFor}/${fileNameWithExtension}`
};

