import * as actionTypes from './actionTypes';
import {userService} from './../../service/userService'


export const login = (email, password) => {
    return dispatch => {
        userService.loginService(email, password)
            .then(
                email => {
                    dispatch({
                        type: actionTypes.LOGIN_SUCCESS,
                        payload: email
                    });
                },
                error => {
                    dispatch({
                        type: actionTypes.LOGIN_FAILURE,
                        payload: error
                    })
                }
            )
    }
};

export const change_tab = (currenttab) => {
    return dispatch => {
        dispatch({
            type: actionTypes.CHANGE_TAB,
            payload: currenttab
        })
    }
};

export const fetchChapters = () => {
    return dispatch => {
        dispatch({
            type: actionTypes.CHAPTERS_FETCH_BEGIN
        });
        userService.getChapters()
            .then(
                data => {
                    dispatch({
                        type: actionTypes.CHAPTERS_FETCH_SUCCESS,
                        payload: data
                    })
                },
                error => {
                    dispatch({
                        type: actionTypes.CHAPTERS_FETCH_FAILURE,
                        payload: error
                    })
                }
            )
    }
};

export const fetchUsers = () => {
    return dispatch => {
        userService.getUsers()
            .then(
                data => {
                    dispatch({
                        type: actionTypes.USERS_FETCH_SUCCESS,
                        payload: data
                    })
                },
                error => {
                    dispatch({
                        type: actionTypes.CHAPTERS_FETCH_FAILURE,
                        payload: error
                    })
                }
            )
    }
}

export const updateCredits = (user, amount) => {
    return dispatch => {
        userService.updateCredits(user, amount)
            .then(
                data => {
                    dispatch({
                        type: actionTypes.UPDATE_CREDIT_SUCCESS,
                        payload: data
                    })
                },
                error => {
                    dispatch({
                        type: actionTypes.UPDATE_CREDIT_FAILURE,
                        payload: error
                    })
                }
            )
    }
}