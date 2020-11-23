import { orderPost, orderGet } from "../../api/api";
import { setOrder, getOrder, setNoAdd } from "../actions/order";

let intialState = {
    history: [],
    Add: false,
}


function order(state = intialState, action) {
    switch(action.type) {
        case "SET_ORDER": 
            return {
                ...state,
                Add: true,
            }
        case "GET_ORDERS":
            return {
                ...state,
                history: [...action.history],
            }
        case "SET_NO_ADD":
            return {
                ...state,
                Add: false,
            }
        default: return state;
    }
}

export const SetOrder = (values) => (dispatch) => {
    orderPost(values)
        .then((res) => {
            res && dispatch(setOrder())
        })
}

export const SetHistoryOrders = (value) => (dispatch) => {
    orderGet(value)
        .then((res) => {
            dispatch(getOrder(res))
        })
}

export default order;