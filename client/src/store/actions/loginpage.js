export function setUser(id, name) {
    return {
        type: 'SET_USER',
        id,
        name,
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

