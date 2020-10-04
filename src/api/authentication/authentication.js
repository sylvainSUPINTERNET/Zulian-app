import config from '../../config/api';

const register = (payload) => {
    return fetch(`${config.authApiUrl}/users`,{
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
};

export const auth = {
    register
};
