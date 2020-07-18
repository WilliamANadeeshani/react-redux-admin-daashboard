import * as actionTypes from '../actions/actionTypes';
import {CHAPTERS} from './../../app/uiConstants'

const initialState = {
    isValidUser: false,
    currentTab: CHAPTERS,
    chapters: [],
    loadingChapters: true
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


        default:
            return state
    }
};

export default reducer;