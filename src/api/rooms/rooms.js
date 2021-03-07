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

const createRoom = body => {
    const {displayName, targetUserUuid} = body;

    return fetch(`${config.apiPpcJava}/rooms`,{
        method: 'post',
        body: JSON.stringify({
            displayName,
            targetUserUuid
        }),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("apiPpcToken")}`
        }
    });
}

export const rooms = {
    getMyRooms,
    createRoom
}
