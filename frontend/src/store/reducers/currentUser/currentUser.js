import { CurrentUserActions } from '../../actions/currentUser/currentUser.js'
import initialState from './state.js'
import { Loading } from './state.js'
export default function CurrentUserReducer(state = initialState, action) {
    switch (action.type) {
        case CurrentUserActions.SET_USER:
            return {
                ...state,
                currentUser: { ...action.payload },
                LoadingState: Loading.LOADED
            }
        case CurrentUserActions.SET_STATUS_LOADING:
            return {
                ...state,
                LoadingState: action.payload
            }
        case CurrentUserActions.CLEAR:
            return {
                ...initialState,
                LoadingState: Loading.ERROR
            }
        default:
            return state;
    }
}