/**
 * Created by caoyang on 17/3/28.
 */
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import index from '../reducers/index';

let store = createStore(index, {}, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
))

export default store;