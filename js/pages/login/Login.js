/**
 * Created by lcw on 2017/3/20.
 */
import React, {Component, PureComponent} from 'react';
import {
    View,
    Image,
    TextInput,
    StyleSheet,
    Text,
    TouchableOpacity,
    Alert
} from 'react-native';

import Button from 'apsl-react-native-button';
import Register from './Register';
import Hinterr from './Hinterr';
import Main from '../main/Main';

export default class Login extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            mobile: '18026957171',
            password: '123456',
            err_mobile: false
        };
    }

    // 实例化组件生命周期
    componentWillMount() {
        console.log('componentWillMount');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    // 运行期生命周期
    componentWillReceiveProps() {
        console.log('componentWillReceiveProps');
    }

    shouldComponentUpdate(newProps, newState) {
        console.log('shouldComponentUpdate');
        return false;
    }

    componentWillUpdate () {
        console.log('componentWillUpdate');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    // 销毁期生命周期
    componentWillUnMount() {
        console.log('componentWillUnMount');
    }

    componentDidUnMount() {
        console.log('componentDidUnMount');
    }


    render() {
        return (
            <View style={styles.parent}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    margin: 30
                }}>
                    { console.log('render') }
                    <Image source={require('./img/bill51.png')}/>
                </View>

                <View style={styles.parent_input}>
                    <TextInput placeholder={'手机号'}
                               style={styles.input}
                               keyboardType={'numeric'}
                               onChangeText={(text) => {
                                   this.setState({mobile: text})
                               }} underlineColorAndroid={'transparent'}
                               value={this.state.mobile}
                    />
                    <Hinterr visible={this.state.err_mobile} msg="手机号码有误"/>
                </View>
                <View style={styles.parent_input}>
                    <TextInput placeholder={'密码'}
                               style={styles.input}
                               secureTextEntry={true}
                               onChangeText={(text) => {
                                   this.setState({password: text})
                               }} underlineColorAndroid={'transparent'}
                               value={this.state.password}
                    />
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'flex-end', marginTop: 2}}>
                    <TouchableOpacity onPress={() => this.register('找回密码')}>
                        <Text style={{color: '#8888DE'}}>忘记密码?</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row', marginTop: 30}}>
                    <Button onPress={this.login} style={styles.loginBtn}
                            textStyle={{color: '#FFFFFF', fontSize: 18}}>
                        登录
                    </Button>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <Text>没有51开发票帐号？</Text>
                    <TouchableOpacity onPress={() => this.register('注册')}>
                        <Text style={{color: '#8888DE'}}>去注册</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 30}}>
                    <Image source={require('./img/weixin.png')}/>
                </View>
            </View>
        );
    }

    login = () => {
        let mobile = this.state.mobile;
        let pswd = this.state.password;
        const {navigator} = this.props;
        if (regBox.regMobile.test(mobile)) {
            startLogin(mobile, pswd, navigator);
            this.setState({
                err_mobile: false
            });
        } else {
            this.setState({
                err_mobile: true
            });
        }
    };

    register(text) {
        const {navigator} = this.props;
        if (navigator) {
            navigator.push({
                name: 'Register',
                component: Register,
                params: {
                    title: text
                }
            })
        }
    };
}

function startLogin(mobile, password, navigator) {
    if (navigator) {
        navigator.push({
            name: 'Main',
            component: Main
        })
    }
}

const regBox = {
    regEmail: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,//邮箱
    regName: /^[a-z0-9_-]{3,16}$/,//用户名
    regMobile: /^0?1[3|4|5|8][0-9]\d{8}$/,//手机
    regTel: /^0[\d]{2,3}-[\d]{7,8}$/
};

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        padding: 30,
        backgroundColor: '#FFFFFF',
        flexDirection: 'column'
    },
    parent_input: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,
        borderWidth: 0.3,
        borderRadius: 5,
        marginTop: 10,
        padding: 2
    },
    input: {
        flex: 1,
        padding: 0
    },
    loginBtn: {
        flex: 1,
        backgroundColor: '#4357F4',
        borderWidth: 0
    }
});