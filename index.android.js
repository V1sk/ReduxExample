/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
} from 'react-native';
import Root from './app/Root';

export default class ReduxExample extends Component {
    render() {
        return (
            <Root/>
        );
    }
}


AppRegistry.registerComponent('ReduxExample', () => ReduxExample);
