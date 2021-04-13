import { call, put, takeEvery } from "redux-saga/effects";
import { orderApi } from "../../services/api/ordersApi.js";
import { OrdersActions, setStatus, setOrders } from "../actions/orders/orders.js";
import { Loading } from "../reducers/orders/state.js";



export function* ordersSaga() {
    yield takeEvery(OrdersActions.FETCH_ORDERS, getOrders);
}

function* getOrders() {
    try {
        yield put(setStatus(Loading.LOADING));
        const item = yield call(orderApi.getAll);
        yield put(setOrders(item));
    } catch(err) {
        yield put(setStatus(Loading.ERROR));
    }
}