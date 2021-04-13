import { OrderActions } from "../../actions/order/order";
import { initialState } from "./state";
import { Loading } from "./state";

export default function OrderReducer (state = initialState, action) {
    switch(action.type) {

        case OrderActions.SET_ORDER: 
            return {
                ...state,
                order: {...action.payload.order},
                LoadingState: Loading.LOADED
            }
        case OrderActions.SET_STATUS_ORDER: 
            return {
                ...state,
                LoadingState: action.payload
            }

        case OrderActions.SET_MANAGER_FOR_ORDER:
            return {
                ...state,
                manager: action.payload.manager
            }

        case OrderActions.SET_STATUS_PROCESS:
            return {
                ...state, 
                UpdateStatus: action.payload
            }

        case OrderActions.CLEAR: 
            return {
                ...initialState
            }
        default: 
            return state
    }
}