import { call, put, takeEvery } from "redux-saga/effects";
import { orderApi } from "../../services/api/ordersApi.js";
import { OrderActions, setStatus, setOrder, setManagerForOrder, setProccessReq, setStatusProcess } from "../actions/order/order.js";
import { Loading, Updating } from "../reducers/order/state.js";


export function* orderSaga() {
    yield takeEvery(OrderActions.FETCH_ORDER, getOrder);
    yield takeEvery(OrderActions.PROCESS_ORDER, setProccess);
    yield takeEvery(OrderActions.ADD_NEW_ORDER, addOrder);
}
function* getOrder({ payload }) {
    try {
        yield put(setStatus(Loading.LOADING))
        const item = yield call(orderApi.getOrderById, payload);
        yield put(setOrder(item));
        yield put(setManagerForOrder(item))
    } catch (err) {
        yield put(setStatus(Loading.ERROR));
    }
}

function* setProccess({ payload }) {
    try {
        yield put(setStatusProcess(Updating.UPDATING))
        yield call(orderApi.proccessRequest, payload)
        yield put(setStatusProcess(Updating.UPDATED))
    } catch (err) {
        yield put(setStatusProcess(Updating.ERROR))
    }
}

function* addOrder({ payload }) {
    try {
        console.log(payload)
        // yield put(setStatusProcess(Updating.UPDATING))
        // yield call(orderApi.proccessRequest, payload)
        yield call(orderApi.addNewOrder, payload)
        // yield put(setStatusProcess(Updating.UPDATED))
    } catch (err) {
        // yield put(setStatusProcess(Updating.ERROR))
    }
}