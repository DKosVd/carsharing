import { call, put, takeEvery } from "redux-saga/effects";
import { usersApi } from "../../services/api/usersApi.js";
import { setUsers, UsersActions, setStatus } from "../actions/users/users.js";
import { Loading } from "../reducers/users/state.js";


export function* usersSaga() {
    yield takeEvery(UsersActions.FETCH_USERS, getUsers);
}

function* getUsers({payload}) {
    try {
        yield put(setStatus(Loading.LOADING));
        const item = yield call(usersApi.getAll, payload);
        yield put(setUsers(item));
    } catch(err) {
        yield put(setStatus(Loading.ERROR));
    }
}