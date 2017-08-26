/**
 * Created by lcw on 2017/3/22.
 */
import React, {Component} from 'react';
import {
    Text,
    StyleSheet
} from 'react-native';

export default class Hinterr extends Component {
    render() {
        if (!this.props.visible) {
            return null;
        } else {
            return (
                <Text style={{color: 'red'}}>{this.props.msg}</Text>
            );
        }
    }
}