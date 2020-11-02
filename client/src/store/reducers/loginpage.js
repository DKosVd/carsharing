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
                name: action.name
            }
        default: return state;
    }
}

export const setUsers = () => (dispatch) => {
    authme()
        .then( (user) => {
            dispatch(setUser(user))
        })
}

export default loginpage;