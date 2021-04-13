export const OrdersActions  = {
    CLEAR: 'orders/SET_CLEAR',
    SET_ORDERS: 'orders/SET_ORDERS',
    FETCH_ORDERS: 'orders/FETCH_ORDERS',
    SET_STATUS_ORDERS: 'orders/SET_STATUS_ORDERS'
}

export const fetchOrders= () => ({
    type: OrdersActions.FETCH_ORDERS,
})

export const setOrders = (orders) => ({
    type: OrdersActions.SET_ORDERS,
    payload: orders
})

export const clear = () => ({
    type: OrdersActions.CLEAR,
})


export const setStatus = (status) => ({
    type: OrdersActions.SET_STATUS_ORDERS,
    payload: status
})