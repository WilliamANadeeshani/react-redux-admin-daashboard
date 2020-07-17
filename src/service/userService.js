import {SERVICE_ROOT} from './serviceConstants';
import {controllers} from './serviceController'

function loginService(email, password) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email, password})
    };

    const URL = SERVICE_ROOT + "users/login";
    return fetch(URL, requestOptions)
        .then(controllers.loginResponseController)
        .then(data => {
            sessionStorage.setItem('token', data.token);
            sessionStorage.setItem('email', data.email);
            return data.email;
        })
}

export const userService = {
    loginService
}