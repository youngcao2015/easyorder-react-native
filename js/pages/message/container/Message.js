/**
 * Created by cy on 2017/5/19.
 */

import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Button,
} from 'react-native';

import BaseComponent from '../../../common/BaseComponent';
import SelectItem from '../../../common/SelectItem';
import BusinessMsg from './BusinessMsg';

export default class Message extends BaseComponent {

    static defaultProps = {
        title: '消息',
        hiddenLeft: true,
        rightImage: 'ios-cart-outline',
    }

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    _busMsg = () => {
        console.log('业务消息');

        this.props.navigator.push({
            name: 'BusinessMsg',
            component: BusinessMsg,
        })
    }

    _sysMsg = () => {
        console.log('系统消息');
    }

    renderBody() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={{height: 15}}/>
                    <SelectItem
                        title="业务消息"
                        icon={require('../img/business_message.png')}
                        onPress={this._busMsg}
                    />

                    <View style={{height: 25}}/>
                    <SelectItem
                        title="系统公告"
                        icon={require('../img/system_message.png')}
                        onPress={this._sysMsg}
                    />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(239, 239, 244)',
    },
});
