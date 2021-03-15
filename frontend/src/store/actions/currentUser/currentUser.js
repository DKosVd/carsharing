export const CurrentUserActions  = {
    CLEAR: 'currentUser/CLEAR',
    SET_USER: 'currentUser/SET_USER',
    AUTH_ME: 'currentUser/AUTH_ME',
    SING_IN:'currentUser/SING_IN',
    LOG_OUT: 'currentUser/LOG_OUT',
    // UPDATE_USER: 'currentUser/UPDATE_USER',
    // SET_STATUS_USER: 'currentUser/SET_STATUS_USER',
    SET_STATUS_LOADING: 'currentUser/SET_STATUS_LOADING',
    // SET_STATUS_UPDATE_USER: 'currentUser/SET_STATUS_UPDATE_USER'
}

export const authMe = () => ({
    type: CurrentUserActions.AUTH_ME,
})

export const setUser = (user) => ({
    type: CurrentUserActions.SET_USER,
    payload: user
})

export const SignIn = (info) => ({
    type: CurrentUserActions.SING_IN,
    payload: info
})

export const setStatus = (status) => ({
    type: CurrentUserActions.SET_STATUS_LOADING,
    payload: status
})

export const clear = () => ({
    type: CurrentUserActions.CLEAR
})

export const logOut = () => ({
    type: CurrentUserActions.LOG_OUT
})