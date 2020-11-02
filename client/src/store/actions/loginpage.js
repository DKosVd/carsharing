export function setUser(id, name) {
    return {
        type: 'SET_USER',
        id: id,
        name: name,
    }
}

