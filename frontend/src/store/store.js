import {  compose, createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers/rootReducer.js'
import createSagaMiddleware from 'redux-saga';
import  rootSaga  from './sagas.js'

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const saga = createSagaMiddleware();

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(saga)))

saga.run(rootSaga)