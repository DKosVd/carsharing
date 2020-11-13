import { authme, register } from "../../api/api";
import { setUser, setError, setErrorEmail, emailExist, setRegister } from "../actions/loginpage";

let initialState = {
    id: null, 
    name: null,
    isAuth: false,
    errorWithPassword: '',
    errorWithEmail: '',
    emailExist: '',
    register: false
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
        case 'EMAIL_EXIST':
            return {
                ...state,
                emailExist: action.error
            }
        case 'SET_REGISTER': 
            return {
                ...state,
                register: true
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

export const registerNewUser = (values) => (dispatch) => {
    register(values)
        .then( res => {
            switch(res) {
                case 'emailExist':
                    dispatch(emailExist('Пользователь с таким email существует'))
                case 'AccountCreated':
                    dispatch(setRegister(true))
            }
        })
}

export default loginpage;