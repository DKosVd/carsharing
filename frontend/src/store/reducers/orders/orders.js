import { OrdersActions } from "../../actions/orders/orders";
import { initialState, Loading } from "./state";


export default function OrdersReducer  (state = initialState, action)  {
    switch(action.type) {
        case OrdersActions.SET_ORDERS: 
            return {
                ...state,
                orders: {
                    orderAllow: [...action.payload.allow],
                    orderNotAllow: [...action.payload.notAllow],
                    orderWait: [...action.payload.wait]
                },
                LoadingState: Loading.LOADED
            }
        
        case OrdersActions.SET_STATUS_ORDERS:
            return {
                ...state, 
                LoadingState: action.payload
            }
    
        case OrdersActions.CLEAR: 
            return {
                ...initialState
            }
        default: 
            return state
    }
}