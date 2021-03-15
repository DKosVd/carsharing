export const UsersActions  = {
    CLEAR: 'users/SET_CLEAR',
    SET_USERS: 'users/SET_USERS',
    FETCH_USERS: 'users/FETCH_USERS',
    SET_STATUS_USERS: 'users/SET_STATUS_USERS'
}

export const fetchUsers = (sort) => ({
    type: UsersActions.FETCH_USERS,
    payload: sort
})

export const setUsers = (users) => ({
    type: UsersActions.SET_USERS,
    payload: users
})

export const clear = () => ({
    type: UsersActions.CLEAR,
})


export const setStatus = (status) => ({
    type: UsersActions.SET_STATUS_USERS,
    payload: status
})