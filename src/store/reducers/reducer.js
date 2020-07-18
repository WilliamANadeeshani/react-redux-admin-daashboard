import * as actionTypes from '../actions/actionTypes';
import {CHAPTERS} from './../../app/uiConstants';
import _ from 'lodash';

const initialState = {
    isValidUser: false,
    currentTab: CHAPTERS,
    chapters: [],
    loadingChapters: true,
    users: [],
    loadingUsers: true,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.LOGIN_SUCCESS:
            return{
                ...state,
                isValidUser: true
            };
        case actionTypes.LOGIN_FAILURE:
            return{
                ...state,
                isValidUser: false
            };
        case actionTypes.CHANGE_TAB:
            return{
                ...state,
                currentTab: action.payload
            };
        case actionTypes.CHAPTERS_FETCH_BEGIN:
            return{
                ...state,
                loadingChapters: true
            };
        case actionTypes.CHAPTERS_FETCH_SUCCESS:
            return{
                ...state,
                chapters: action.payload,
                loadingChapters: false
            };
        case actionTypes.USERS_FETCH_BEGIN:
            return{
                ...state,
                loadingUsers: true
            };
        case actionTypes.USERS_FETCH_SUCCESS:
            return{
                ...state,
                users: action.payload,
                loadingUsers: false
            };
        case actionTypes.UPDATE_CREDIT_SUCCESS:
            let users = _.clone(state.users);
            _.filter(users, function (o) {
                if(o.userID === action.payload.userID){
                    o.creditBalance = action.payload.creditBalance;
                    return o;
                }
            });
            return{
                ...state,
                users: users
            };


        default:
            return state
    }
};

export default reducer;