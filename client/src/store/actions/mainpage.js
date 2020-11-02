export function setCar(value) {
    return {
        type: 'SET_CARS',
        cars: value,
    }
}

export function setLoading(value) {
    return {
        type: 'SET_LOADING',
        isLoading: value,
    }
}

