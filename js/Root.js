/**
 * Created by caoyang on 17/3/28.
 */

import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './store/store';
import App from './pages/App';

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}

//
// 上面代码中，Provider在根组件外面包了一层，这样一来，App的所有子组件就默认都可以拿到state了。