/**
 * Created by zz on 17/3/31.
 */
import React, {Component} from 'react';
import {Provider} from 'react-redux'
import Main from './Main';
import store from './utils/store';

export default class Root extends Component {

    render() {
        return (
            <Provider store={store}>
                <Main/>
            </Provider>
        )
    }

}