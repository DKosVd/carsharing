import loginpage from './loginpage';
import mainpage from './mainpage';
import order from './order';
import { combineReducers } from 'redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

const reducers = combineReducers({
    loginpage,
    mainpage,
    order
}
);

const store  = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;
