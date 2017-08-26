/**
 * Created by caoyang on 17/3/28.
 */

import React, {Component} from 'react';
import {
    Navigator,
    BackAndroid,
    TouchableOpacity,
    Text,
    StatusBar,
} from 'react-native';

import Login from './login/Login';

let _navigator = null; // 作为Android键盘返回键导航

export default class App extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{name: 'login', component: Login}}
                renderScene={
                    (route, navigator) => {
                        _navigator = navigator;
                        let Component = route.component;
                        <StatusBar barStyle={'light-content'}/>
                        return <Component {...route.params} navigator={navigator}/>
                    }
                }
                configureScene={(route) => Navigator.SceneConfigs.HorizontalSwipeJump}
            />
        );
    }
}


/**
 *  路由配置,暂时没找到合适的使用方法,故弃之
 */
var NavigationBarRouteMapper = {

        LeftButton(route, navigator, index, navState) {
            if (index === 0) {
                return null;
            } else {
                return (
                    <TouchableOpacity onPress={() => navigator.pop()}>
                        <Text>返回</Text>
                    </TouchableOpacity>
                );
            }
        },

        RightButton(route, navigator, index, navState) {
            return null;
        },

        Title(route, navigator, index, navState)
        {
            return (
                <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}>
                    <Text style={{color: 'white', margin: 10, fontSize: 16}}>
                        hello
                    </Text>
                </TouchableOpacity>
            );
        }
    }
    ;

BackAndroid.addEventListener("hardwareBackPress", () => {
    if (_navigator && _navigator.getCurrentRoutes().length > 1) {
        _navigator.pop();
        return true;
    }
    return false;
})

