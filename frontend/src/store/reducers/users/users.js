import initialState from './state.js'
import { UsersActions } from '../../actions/users/users.js'
import { Loading } from './state.js'
export default function usersReducer(state = initialState, action) {
    switch(action.type) {
        case UsersActions.SET_USERS:
            return {
                users: [...action.payload],
                LoadingState: Loading.LOADED
            }
        case UsersActions.SET_STATUS_USERS: 
            return {
                ...state,
                LoadingState: action.payload
            }
        case UsersActions.CLEAR:
            return {
                ...initialState
            }
        default: 
            return state;
    }
}