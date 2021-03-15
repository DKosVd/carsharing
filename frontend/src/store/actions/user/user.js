export const UserActions  = {
    CLEAR: 'user/CLEAR',
    SET_USER: 'user/SET_USER',
    FETCH_USER: 'user/FETCH_USER',
    DELETE_USER: 'user/DELETE_USER',
    UPDATE_USER: 'user/UPDATE_USER',
    REGISTER_USER: 'user/REGISTER_USER',
    SET_STATUS_USER: 'user/SET_STATUS_USER',
    SET_STATUS_DELETE: 'user/SET_STATUS_DELETE',
    SET_STATUS_REGISTER: 'user/SET_STATUS_REGISTER',
    SET_STATUS_UPDATE_USER: 'user/SET_STATUS_UPDATE_USER'
}

export const fetchUser = (id) => ({
    type: UserActions.FETCH_USER,
    payload: id
})

export const updateUser = (data) => ({
    type: UserActions.UPDATE_USER,
    payload: data
})

export const setUser = (user) => ({
    type: UserActions.SET_USER,
    payload: user
})

export const setStatus = (status) => ({
    type: UserActions.SET_STATUS_USER,
    payload: status
})

export const setStatusDelete = (status) => ({
    type: UserActions.SET_STATUS_DELETE,
    payload: status
})

export const setStatusRegister = (status) => ({
    type: UserActions.SET_STATUS_REGISTER,
    payload: status
})

export const setStatusUpdate = (status) => ({
    type: UserActions.SET_STATUS_UPDATE_USER,
    payload: status
})

export const deleteUser = (id) => ({
    type: UserActions.DELETE_USER,
    payload: id
})

export const clear = () => ({
    type: UserActions.CLEAR
})

export const registerUser = (data) => ({
    type: UserActions.REGISTER_USER,
    payload: data
})