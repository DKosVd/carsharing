export const getState = (opt) => {
    try {
        const data = window.localStorage.getItem(opt)
        if(data === null) {
            return undefined;
        }
        return data
    } catch(err) {
        return undefined
    }
}


export const setState = (opt, token) => {
    try {
        window.localStorage.setItem(opt, `bearer ${token}`)
    } catch(err) {
        return undefined
    }
} 

export const deleteState = (opt) => {
    try {
        window.localStorage.removeItem(opt)
    } catch(err) {
        return undefined
    }
}