import loginpage from './loginpage';
import mainpage from './mainpage';
import { combineReducers } from 'redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

const reducers = combineReducers({
    loginpage,
    mainpage
}
);

const store  = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;
