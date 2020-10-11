import config from '../../config/api';

const register = (payload) => {
    return fetch(`${config.apiUrl}/users`,{
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
};

const login = (payload) => {
    return fetch(`${config.apiUrl}/auth/token`,{
        method: 'post',
        credentials: 'include', // keep cookie (where the token is set at Read only and https safe)
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });
};

const verifyPermission = (roleTarget) => {
    return fetch(`${config.apiUrl}/auth/verify/${roleTarget}`, {
        method: 'get',
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
};

export const auth = {
    register,
    login,
    verifyPermission
};
