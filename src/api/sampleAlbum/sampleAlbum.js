import config from '../../config/api';

const createAlbum = (displayName) => {
    return fetch(`${config.apiPpc}/albums`,{
        method: 'post',
        body: JSON.stringify({displayName: displayName}),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("apiPpcToken")}`
        }
    })
};

export const album = {
    createAlbum
}

export const sampleAlbum = {
};
