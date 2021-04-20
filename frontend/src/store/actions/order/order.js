export const OrderActions  = {
    CLEAR: 'order/SET_CLEAR',
    SET_ORDER: 'order/SET_ORDER',
    FETCH_ORDER: 'order/FETCH_ORDER',
    PROCESS_ORDER: 'order/PROCESS_ORDER',
    SET_STATUS_PROCESS: 'order/SET_STATUS_PROCESS',
    SET_MANAGER_FOR_ORDER: 'order/SET_MANAGER_FOR_ORDER',
    SET_STATUS_ORDER: 'order/SET_STATUS_ORDER',
    ADD_NEW_ORDER: 'order/ADD_NEW_ORDER',
}

export const fetchOrder= (id) => ({
    type: OrderActions.FETCH_ORDER,
    payload: id
})

export const setOrder = (order) => ({
    type: OrderActions.SET_ORDER,
    payload: order
})

export const clear = () => ({
    type: OrderActions.CLEAR,
})

export const setManagerForOrder = (manager) => ({
    type: OrderActions.SET_MANAGER_FOR_ORDER,
    payload: manager
})

export const addNewOrder = (data) => ({
    type: OrderActions.ADD_NEW_ORDER,
    payload: data
})

export const setProccessReq = (data) => ({
    type: OrderActions.PROCESS_ORDER,
    payload: data
})

export const setStatus = (status) => ({
    type: OrderActions.SET_STATUS_ORDER,
    payload: status
})

export const setStatusProcess = (status) => ({
    type: OrderActions.SET_STATUS_PROCESS,
    payload: status
})