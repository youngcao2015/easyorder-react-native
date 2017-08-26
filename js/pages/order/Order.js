/**
 * Created by cy on 2017/5/19.
 */

import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

import BaseComponent from '../../common/BaseComponent';


export default class Order extends BaseComponent {

    static defaultProps = {
        leftImage: 'ios-search-outline',
        title: '订货单',
        rightImage: 'ios-cart-outline',
    }

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {

        };
    }

    componentDidMount() {
        console.log('加载数据');
    }

    leftAction() {
        console.log('订货单搜索');
    }

    rightAction() {
        console.log('进入购物车');
    }

    renderBody() {
        console.log('渲染content');

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
