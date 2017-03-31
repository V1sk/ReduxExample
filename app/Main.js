/**
 * Created by zz on 17/3/31.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import test from './actions/Test'

export class Main extends Component {

    render() {
        let {actions, params} = this.props;
        return (
            <View style={styles.container}>
                <Button
                    style={styles.welcome}
                    onPress={() => {
                        actions.test(params);
                    }}
                    title='Test'
                />
                <Text style={styles.instructions}>
                    {params}
                </Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginTop: 15,
    },
});

export default connect((state) => ({
    params: state.test.params,
}), dispatch => ({
    actions: bindActionCreators(test, dispatch),
}))(Main)