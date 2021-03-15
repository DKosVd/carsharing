import { call, put, takeEvery } from "redux-saga/effects";
import { carsApi } from '../../services/api/carsApi.js'
import { CarsActions, setCars } from '../actions/cars/cars.js'
import { setStatus } from "../actions/cars/cars.js";
import { Loading } from "../reducers/cars/state.js";

export function* carsSaga() {
    yield takeEvery(CarsActions.FETCH_CARS, getCars);
}

function* getCars() {
    try {
        yield put(setStatus(Loading.LOADING));
        const item = yield call(carsApi.getAll);
        yield put(setCars(item));
    } catch(err) {
        yield put(setStatus(Loading.ERROR));
    }
}