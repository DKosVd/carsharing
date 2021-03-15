import { call, put, takeEvery } from "redux-saga/effects";
import { carsApi } from "../../services/api/carsApi.js";
import { CarActions, setCar } from '../actions/car/car.js'
import { setStatus } from "../actions/car/car.js";
import { Loading } from "../reducers/user/state.js";


export function* carSaga() {
    yield takeEvery(CarActions.FETCH_CAR, getCar);
}
function* getCar({payload}) {
    try {
        yield put(setStatus(Loading.LOADING))
        const item = yield call(carsApi.getCarById, payload);
        yield put(setCar(item));
    } catch(err) {
        yield put(setStatus(Loading.ERROR));
    }
}