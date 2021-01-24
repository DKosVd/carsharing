import { authme, register, cookie, logout } from "../../api/api";
import { setUser, setError, setErrorEmail, emailExist, setRegister, Logout } from "../actions/loginpage";

let initialState = {
    id: null, 
    name: null,
    isAuth: false,
    isAdmin: false,
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
        case 'LOGOUT':
            return {
                ...state,
                id: null,
                name: null,
                isAuth: false,
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
                    default: 
                        return new Error('Результат пустой')
                }
            }
        })
}

export const Setcookie = () => (dispatch) => {
    cookie()
        .then(({id, name}) => {
            id && dispatch(setUser(id, name))
        })
}

export const LogOut = () => (dispatch) => {
    logout()
        .then(res => {
            dispatch(Logout())
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
                default: 
                    return new Error('Результат пустой')
            }
        })
}

export default loginpage;