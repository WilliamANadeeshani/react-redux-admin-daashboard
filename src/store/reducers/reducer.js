import * as actionTypes from '../actions/actionTypes'

const initialState = {
    isValidUser: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.LOGIN_SUCCESS:
            return{
                isValidUser: true
            }

        case actionTypes.LOGIN_FAILURE:
            return{
                isValidUser: false
            }

        default:
            return state
    }
}

export default reducer;