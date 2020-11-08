import config from '../../config/api';

const getCategories = () => {
    return fetch(`${config.apiUrlMapZulian}/categories`,{
        method: 'get',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
};

const getCategoriesStatic = () => {
    return fetch(`${config.apiUrlMapZulian}/categories/static`,{
        method: 'get',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
};

export const category = {
    getCategories,
    getCategoriesStatic
};
