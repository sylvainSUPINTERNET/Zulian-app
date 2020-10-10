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

const login = (payload) => {
    return fetch(`${config.authApiUrl}/auth/token`,{
        method: 'post',
        credentials: 'include', // keep cookie (where the token is set at Read only and https safe)
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });
};

export const auth = {
    register,
    login
};
