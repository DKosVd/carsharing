import { all } from 'redux-saga/effects';
import { carSaga } from './saga/car.js';
import { carsSaga } from './saga/cars.js';
import { CurrentUsersSaga } from './saga/currentUser.js';
import { userSaga } from './saga/user.js';
import { usersSaga } from './saga/users.js'

export default function* rootSaga() {
    yield all([
        usersSaga(),
        userSaga(),
        carsSaga(),
        carSaga(),
        CurrentUsersSaga()
    ])
}