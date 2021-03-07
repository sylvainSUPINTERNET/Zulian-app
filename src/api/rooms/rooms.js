import config from '../../config/api';


const getMyRooms = () => {
    return fetch(`${config.apiPpcJava}/rooms`,{
        method: 'get',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("apiPpcToken")}`
        }
    })
};

export const rooms = {
    getMyRooms
}
