export const CarActions  = {
    CLEAR: 'car/CLEAR',
    SET_CAR: 'car/SET_CAR',
    FETCH_CAR: 'car/FETCH_CAR',
    UPDATE_CAR: 'car/UPDATE_CAR',
    SET_STATUS_CAR: 'car/SET_STATUS_CAR',
    SET_STATUS_UPDATE_CAR: 'car/SET_STATUS_UPDATE_CAR'
}

export const fetchCar = (id) => ({
    type: CarActions.FETCH_CAR,
    payload: id
})

export const updateCar = (data) => ({
    type: CarActions.UPDATE_CAR,
    payload: data
})

export const setCar = (car) => ({
    type: CarActions.SET_CAR,
    payload: car
})

export const setStatus = (status) => ({
    type: CarActions.SET_STATUS_CAR,
    payload: status
})

export const setStatusUpdate = (status) => ({
    type: CarActions.SET_STATUS_UPDATE_CAR,
    payload: status
})

export const clear = () => ({
    type: CarActions.CLEAR
})