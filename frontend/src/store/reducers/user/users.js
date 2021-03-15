import { UserActions } from '../../actions/user/user.js'
import initialState, { Updating } from './state.js'
import { Loading } from './state.js'
export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case UserActions.SET_USER:
            return {
                ...state,
                user: { ...action.payload },
                LoadingState: Loading.LOADED
            }
        case UserActions.SET_STATUS_USER:
            return {
                ...state,
                LoadingState: action.payload
            }
        case UserActions.SET_STATUS_UPDATE_USER:
            return {
                ...state,
                UpdateStatus: action.payload
            }
        case UserActions.SET_STATUS_REGISTER: 
            return {
                ...state,
                RegisterUser: action.payload
            }
        case UserActions.SET_STATUS_DELETE: 
            return {
                ...state, 
                DeleteUser: action.payload
            }
        case UserActions.CLEAR:
            return {
                ...initialState
            }
        default:
            return state;
    }
}