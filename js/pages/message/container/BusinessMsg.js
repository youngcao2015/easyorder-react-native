/**
 * Created by cy on 2017/5/19.
 */

import React, { PropTypes } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
} from 'react-native';

import BaseComponent from '../../../common/BaseComponent';


export default class BusinessMsg extends BaseComponent {

    static propTypes = {
        businessMsg: PropTypes.array,
    }

    static defaultProps = {
        title: '消息',
        rightTitle: '全部已读',
    }

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {

        };
    }

    componentDidMount() {
        console.log(this.props.navigator.getCurrentRoutes());
    }

    renderBody() {
        console.log('body render');
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(239, 239, 244)',
    },
});
