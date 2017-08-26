/**
 * Created by cy on 2017/5/18.
 */

import React, {Component} from 'react';
import {
    View,
    StyleSheet
} from 'react-native';

import NavigationBar from './NavigationBar';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    }
});

export default class BaseComponent extends Component {

    constructor(props) {
        super(props);

        this.getNavigationBarProps = this.getNavigationBarProps.bind(this);
        this.renderNavigationBar = this.renderNavigationBar.bind(this);
        this.renderBody = this.renderBody.bind(this);
        this.leftAction = this.leftAction.bind(this);
        this.rightAction = this.rightAction.bind(this);
    }

    componentDidMount() {

    }

    componentWillUnMount() {
        console.log('componentWillUnMount');
    }

    leftAction() {
        this.props.navigator.pop();
    }

    rightAction() {
        console.log('onRightPressed');
    }

    /**
     * 子类可重写
     * @returns {}
     */
    getNavigationBarProps(){
        return {};
    }

    renderNavigationBar() {
        let navigationBarProps = this.getNavigationBarProps();
        Object.assign(navigationBarProps, this.props);

        return (
            <NavigationBar
                leftAction={this.leftAction}
                rightAction={this.rightAction}
                title={navigationBarProps.title}
                leftTitle={navigationBarProps.leftTitle}
                leftImage={navigationBarProps.leftImage}
                rightTitle={navigationBarProps.rightTitle}
                rightImage={navigationBarProps.rightImage}
                titleView={navigationBarProps.titleView}
                hiddenLeft={navigationBarProps.hiddenLeft}
                hiddenRight={navigationBarProps.hiddenRight}
                hiddenNavigationBar={navigationBarProps.hiddenNavigationBar}
            />
        );
    }

    renderBody() {
        console.log('渲染页面content');

    }

    render() {
        return (
            <View style={[styles.container, this.props.style]}>
                {this.renderNavigationBar()}
                {this.renderBody()}
            </View>
        );
    }
}