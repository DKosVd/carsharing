import initialState from './state.js'
import { CarsActions } from '../../actions/cars/cars.js'
import { Loading } from './state.js'
export default function carsReducer(state = initialState, action) {
    switch(action.type) {
        case CarsActions.SET_CARS:
            return {
                cars: [...action.payload],
                LoadingState: Loading.LOADED
            }
        case CarsActions.SET_STATUS_CARS: 
            return {
                ...state,
                LoadingState: action.payload
            }
        case CarsActions.CLEAR:
            return {
                ...initialState
            }
        default: 
            return state;
    }
}