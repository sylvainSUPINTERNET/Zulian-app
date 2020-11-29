import config from '../../config/api';

const getProducts = (size, pageNb) => {
    return fetch(`${config.apiUrlMapZulian}/products`,{
        method: 'get',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
};

export const product = {
    getProducts
};
