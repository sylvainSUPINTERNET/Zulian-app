import apiConf from '../conf';


export const uploadMedia = async (fileObject, user_email, user_id) => {
    const { URL } = apiConf.mediaApi

    let formData = new FormData();
    formData.append('media', fileObject);
    formData.append('user_email', user_email);
    formData.append('user_id', user_id);

    // Do not need to specifiy the content type etc (done auto)
    const req = await fetch(URL, {
        method: 'POST',
        body: formData
    })
    console.log(req.status);
    console.log(req.body)
    const resp = await req.json();
    console.log(resp);
    return resp;
}