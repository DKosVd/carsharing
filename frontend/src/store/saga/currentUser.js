import { call, put, takeEvery } from "redux-saga/effects";
import { usersApi } from "../../services/api/usersApi.js";
import { clear, CurrentUserActions, setStatus, setUser } from "../actions/currentUser/currentUser.js";
import { deleteState, setState } from "../localStorage/localStorage.js";
import { Loading } from "../reducers/currentUser/state.js";


export function* CurrentUsersSaga() {
    yield takeEvery(CurrentUserActions.AUTH_ME, authUser);
    yield takeEvery(CurrentUserActions.SING_IN, signIn)
    yield takeEvery(CurrentUserActions.LOG_OUT, logOut)
}

function* authUser() {
    try {
        yield put(setStatus(Loading.LOADING));
        const item = yield call(usersApi.authMe);
        yield put(setUser(item));
    } catch (err) {
        yield put(setStatus(Loading.ERROR));
    }
}

function* signIn({payload}) {
    try {
        yield put(setStatus(Loading.LOADING));
        const item = yield call(usersApi.signIn, payload);
        setState('Authorization', item.token)
        delete item.token
        yield put(setUser(item));
    } catch (err) {
        yield put(setStatus(Loading.ERROR));
    }
}

function* logOut() {
    try {
        yield put(setStatus(Loading.LOADING))
        deleteState('Authorization');
        yield put(clear)
    } catch(err) {
        yield put(setStatus(Loading.ERROR))
    }
}