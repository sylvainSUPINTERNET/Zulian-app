import config from '../../config/api';

const createProfile = body => {
    const {username, city, country, gender, relationKind, hobbies} = body;

    let hobbiesToString = "";
    hobbies.map( (el, i) => i === 0 ? hobbiesToString = hobbiesToString.concat(el.name) : hobbiesToString = hobbiesToString.concat(",",el.name));

    return fetch(`${config.apiPpc}/profile`,{
        method: 'post',
        body: JSON.stringify({
            username,
            city,
            country,
            gender,
            relationKind,
            hobbies: hobbiesToString
        }),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("apiPpcToken")}`
        }
    });
}

export const profil = {
    createProfile
}