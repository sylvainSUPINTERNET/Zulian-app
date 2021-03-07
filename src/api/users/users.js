import config from '../../config/api';


const getUsers = () => {
    return fetch(`${config.apiPpc}/users`,{
        method: 'get',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("apiPpcToken")}`
        }
    })
};


export const users = {
    getUsers
}
