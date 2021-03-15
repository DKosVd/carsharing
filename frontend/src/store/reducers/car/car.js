import { CarActions } from '../../actions/car/car.js'
import initialState  from './state.js'
import { Loading } from './state.js'
export default function carReducer(state = initialState, action) {
    switch (action.type) {
        case CarActions.SET_CAR:
            return {
                ...state,
                car: { ...action.payload },
                LoadingState: Loading.LOADED
            }
        case CarActions.SET_STATUS_CAR:
            return {
                ...state,
                LoadingState: action.payload
            }
        case CarActions.SET_STATUS_UPDATE_CAR:
            return {
                ...state,
                UpdateStatus: action.payload
            }
        case CarActions.CLEAR:
            return {
                ...initialState
            }
        default:
            return state;
    }
}