export function setOrder() {
    return {
        type: 'SET_ORDER',
    }
}

export function getOrder(history) {
    return {
        type: 'GET_ORDERS',
        history
    }
}

export function setNoAdd() {
    return {
        type: "SET_NO_ADD",
    }
}