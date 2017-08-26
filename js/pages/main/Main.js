/**
 * Created by caoyang on 17/3/28.
 */
import React, {Component} from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';

import TabBar from '../../common/TabBar';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import Home from '../home/container/Home';
import Message from '../message/container/Message';
import Order from '../order/Order';
import Mine from '../mine/Mine';

var tabIcons = ['ios-home-outline', 'ios-list-box-outline', 'ios-text-outline', 'ios-person-outline'];
var tabNames = ["首页", "订单", "消息", "我的"];

export default class Main extends Component {

    render() {
        return (
            <View style={styles.container}>
                <ScrollableTabView
                    locked={true}
                    scrollWithoutAnimation={true}
                    tabBarPosition="bottom"
                    renderTabBar={() => <TabBar tabIcons={tabIcons} tabNames={tabNames}/>}>
                    <Home tabLabel="首页" {...this.props}/>
                    <Order tabLabel='订单' {...this.props}/>
                    <Message tabLabel='消息' {...this.props}/>
                    <Mine tabLabel='我的' {...this.props}/>
                </ScrollableTabView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
});
