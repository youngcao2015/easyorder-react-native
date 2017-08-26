/**
 * Created by cy on 2017/5/19.
 */

import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
} from 'react-native';

import BaseComponent from '../../common/BaseComponent';


export default class Mine extends BaseComponent {

    static defaultProps = {
        hiddenNavigationBar: true,
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
        backgroundColor: 'rgb(239, 239, 244)',
    },
});
