import { orderPost } from "../../api/api";
import { setOrder } from "../actions/order";

let intialState = {
    history: [],
    Add: false,
}


function order(state = intialState, action) {
    switch(action.type) {
        case "SET_ORDER": 
            return {
                ...state,
                add: true,
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

export default order;