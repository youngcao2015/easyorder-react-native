/**
 * Created by cy on 2017/5/19.
 */

import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
} from 'react-native';

import BaseComponent from '../../../common/BaseComponent';

var {height, width} = Dimensions.get('window');

const titleView = (
    <Text style={{fontSize: 18, color: 'white'}}>首页</Text>
);

export default class Home extends BaseComponent {

    static defaultProps = {
        titleView: titleView,
        hiddenLeft: true,
    }

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {

        };
    }

    componentDidMount() {

    }

    renderBody() {

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
