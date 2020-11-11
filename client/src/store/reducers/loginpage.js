import { authme } from "../../api/api";
import { setUser, setError, setErrorEmail } from "../actions/loginpage";

let initialState = {
    id: null, 
    name: null,
    isAuth: false,
    errorWithPassword: '',
    errorWithEmail: '',
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
        case 'ERROR': 
            return {
                ...state,
                errorWithPassword: action.error
            }
        case 'ERROR_WITH_EMAIL':
            return {
                ...state, 
                errorWithEmail: action.error
            }
        default: return state;
    }
}

export const setUsers = (values) => (dispatch) => {
    authme(values)
        .then( res => {
            if (!!res.id) {
                dispatch(setUser(res.id, res.name))
            } else {
                switch(res) {
                    case 'password':
                        dispatch(setError('Неверный пароль')) 
                    case 'email':
                        dispatch(setErrorEmail('Неверный email')) 
                }
            }
        })
}

export default loginpage;