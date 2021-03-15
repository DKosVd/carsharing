export const CarsActions  = {
    CLEAR: 'cars/SET_CLEAR',
    SET_CARS: 'cars/SET_CARS',
    FETCH_CARS: 'cars/FETCH_CARS',
    SET_STATUS_CARS: 'cars/SET_STATUS_CARS'
}

export const fetchCars= () => ({
    type: CarsActions.FETCH_CARS,
})

export const setCars = (cars) => ({
    type: CarsActions.SET_CARS,
    payload: cars
})

export const clear = () => ({
    type: CarsActions.CLEAR,
})


export const setStatus = (status) => ({
    type: CarsActions.SET_STATUS_CARS,
    payload: status
})