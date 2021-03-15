import { call, put, takeEvery } from "redux-saga/effects";
import { usersApi } from "../../services/api/usersApi.js";
import { setStatus, setStatusUpdate, setUser, UserActions, setStatusRegister, setStatusDelete } from "../actions/user/user.js";
import { Loading, Updating, Register, Delete } from "../reducers/user/state.js";



export function* userSaga() {
    yield takeEvery(UserActions.FETCH_USER, getUser);
    yield takeEvery(UserActions.UPDATE_USER, updateUser);
    yield takeEvery(UserActions.REGISTER_USER, registerUser)
    yield takeEvery(UserActions.DELETE_USER, deleteUser)
}

function* updateUser({payload}) {
    try {
        yield put(setStatusUpdate(Updating.UPDATING))
        yield call(usersApi.updateUser, payload);
        yield put(setStatusUpdate(Updating.UPDATED))
    } catch(err) {
        yield put(setStatusUpdate(Updating.ERROR))
    }
}

function* getUser({payload}) {
    try {
        yield put(setStatus(Loading.LOADING))
        const item = yield call(usersApi.getOneUser, payload);
        yield put(setUser(item));
    } catch(err) {
        yield put(setStatus(Loading.ERROR));
    }
}

function* registerUser({payload}) {
    try {
        console.log('SAGA', payload)
        yield put(setStatusRegister(Register.REGISTERING))
        const item = yield call(usersApi.registerUser, payload)
        yield put(setStatusRegister(Register.REGISTERED))
    } catch(err) {
        yield put(setStatusRegister(Register.ERROR))
    }
}

function* deleteUser({payload}) {
    try {
        yield put(setStatusDelete(Delete.DELETING))
        yield call(usersApi.deleteUser, payload)
        yield put(setStatusDelete(Delete.DELETED))
    } catch(err) {
        yield put(setStatusDelete(Delete.ERROR))
    }
}