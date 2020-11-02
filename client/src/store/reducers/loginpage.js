import { authme } from "../../api/api";
import { setUser } from "../actions/loginpage";

let initialState = {
    id: null, 
    name: null,
    isAuth: false,
}


function loginpage(state = initialState, action) {
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                id: action.id,
                name: action.name,
                isAuth: true,
            }
        default: return state;
    }
}

export const setUsers = (values) => (dispatch) => {
    authme(values)
        .then( ({id, name}) => {
            console.log(id, name)
            dispatch(setUser(id, name))
        })
}

export default loginpage;