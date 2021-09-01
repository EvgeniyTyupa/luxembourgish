import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import multi from 'redux-multi';
import commonReducer from './commonReducer';
import thunkMiddlware from 'redux-thunk';

let reducers = combineReducers({
    common: commonReducer
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(applyMiddleware(thunkMiddlware, multi)));

window.store = store;

export default store;