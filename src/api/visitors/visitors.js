import config from '../../config/api';

const getVisitors = (page,size, filter) => {
    return fetch(`${config.apiUrlMapZulian}/visitors?page=${page}&size=${size}&filter=${filter}`,{
        method: 'get',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
};

export const visitor = {
    getVisitors
};
