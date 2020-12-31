import config from '../../config/api';

const getVisitors = (page,size, filter, eTag) => {
    return fetch(`${config.apiUrlMapZulian}/visitors?page=${page}&size=${size}&filter=${filter}`,{
        method: 'get',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'If-None-Match': eTag
        }
    })
};

export const visitor = {
    getVisitors
};
