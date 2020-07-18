import {SERVICE_ROOT} from './serviceConstants';
import {loginResponseController, getChapterComposer} from './serviceController'

const BEARER_TOKEN = sessionStorage.getItem('token');

let loginService = (email, password) => {
    const URL = SERVICE_ROOT + "users/login";
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email, password})
    };

    return fetch(URL, requestOptions)
        .then(loginResponseController)
        .then(data => {
            sessionStorage.setItem('token', "Bearer " + data.token);
            sessionStorage.setItem('email', data.email);
            return data.email;
        })
};

let getChapters = () => {
    const URL = SERVICE_ROOT + "chapters";
    const requestOptions = {
        method: 'GET',
        headers: {'Authorization': BEARER_TOKEN}
    };

    return fetch(URL, requestOptions)
        .then(getChapterComposer)
        .then(data => {
            return data;
        })
};

export const userService = {
    loginService,
    getChapters
};