import * as actionTypes from './actionTypes';
import {userService} from './../../service/userService'


export const login = (email, password) => {

    return dispatch => {

        userService.loginService(email, password)
            .then(
                email => {
                    dispatch({
                        type: actionTypes.LOGIN_SUCCESS
                    })
                },
                error => {
                    dispatch({
                        type: actionTypes.LOGIN_FAILURE
                    })
                }
            )
    }
}