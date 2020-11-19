export function setUser(id, name) {
    return {
        type: 'SET_USER',
        id,
        name,
    }
}

export function setRegister() {
    return {
        type: 'SET_REGISTER'
    }
}

export function setError(error) {
    return {
        type: 'ERROR',
        error
    }
}

export function setErrorEmail(error) {
    return {
        type: 'ERROR_WITH_EMAIL',
        error
    }
}

export function emailExist(error) {
    return {
        type: 'EMAIL_EXIST',
        error
    }
}

export function Logout() {
    return {
        type: 'LOGOUT'
    }
}

