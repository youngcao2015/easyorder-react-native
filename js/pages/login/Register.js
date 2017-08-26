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
    Alert,
    Navigator
} from 'react-native';

import Button from 'apsl-react-native-button';
import Hinterr from './Hinterr';

export default class Register extends PureComponent {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            mobile: '',
            code: '',
            password: '',
            confirm: '',
            err_mobile: false,
            err_regPswd: false,
            err_confirm: false,
            title: ''
        };
    }

    // 实例化生命周期
    componentWillMount() {
        console.log('componentWillMount');
    }

    componentDidMount() {
        console.log('componentDidMount');
        this.setState({
            title: this.props.title
        });
    }

    // 运行期生命周期
    componentWillReceiveProps() {
        console.log('componentWillReceiveProps');
    }

    shouldComponentUpdate() {
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
                    marginBottom: 20
                }}>
                    { console.log('render') }

                    <Image source={require('./img/bill51.png')}/>
                </View>
                <View style={styles.parent_input}>
                    <TextInput placeholder={'手机号'} style={styles.input} keyboardType={'numeric'}
                               onChangeText={(text) => {
                                   this.setState({mobile: text})
                               }} underlineColorAndroid={'transparent'}/>
                    <Hinterr visible={this.state.err_mobile} msg="手机号码有误"/>
                </View>
                <View style={styles.parent_input}>
                    <TextInput placeholder={'短信验证码'} style={styles.input} onChangeText={(text) => {
                        this.setState({code: text})
                    }} underlineColorAndroid={'transparent'}/>
                    <View style={{height: 40, width: 0.3, backgroundColor: '#B3B3B3'}}/>
                    <Button onPress={() => Register.getCode()} style={styles.getCode}
                            textStyle={{color: '#B3B3B3', fontSize: 12}}>
                        获取验证码
                    </Button>
                </View>
                <View style={styles.parent_input}>
                    <TextInput placeholder={'密码'} style={styles.input} secureTextEntry={true}
                               onChangeText={(text) => {
                                   this.setState({password: text})
                               }} onBlur={this.checkPswd} underlineColorAndroid={'transparent'}/>
                    <Hinterr visible={this.state.err_regPswd} msg="密码不符合规范"/>
                </View>
                <View style={styles.parent_input}>
                    <TextInput style={styles.input} placeholder={'确认密码'} secureTextEntry={true}
                               onChangeText={(text) => {
                                   this.setState({confirm: text})
                               }} underlineColorAndroid={'transparent'}/><Hinterr visible={this.state.err_confirm}
                                                                                  msg="两次密码不一致"/>
                </View>
                <Text style={styles.hintText}>密码由大小写字母、数字组成,最短8位,区分大小写</Text>
                <View style={{flexDirection: 'row', marginTop: 30}}>
                    <Button
                        onPress={this.register}
                        style={styles.loginBtn}
                        textStyle={{color: '#FFFFFF', fontSize: 18}}>
                        {this.state.title}
                    </Button>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <Text>已有51开发票帐号？</Text>
                    <TouchableOpacity onPress={this.login}>
                        <Text style={{color: '#8888DE'}}>去登录</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    static getCode() {
        alert('getCode');
    }

    checkPswd = () => {
        if (!regBox.regPswd.test(this.state.password)) {
            this.setState({
                err_regPswd: true
            });
        } else {
            this.setState({
                err_regPswd: false
            });
        }
    };

    register = () => {
        if (regBox.regMobile.test(this.state.mobile)) {
            if (this.state.confirm === this.state.password) {
                this.setState({
                    err_mobile: false,
                    err_confirm: false
                });
                if (regBox.regPswd.test(this.state.password)) {
                    startRegister(this.state.mobile, this.state.code, this.state.password);
                }
            } else {
                this.setState({
                    err_confirm: true
                });
            }
        } else {
            this.setState({
                err_mobile: true
            });
        }
    };

    login = () => {
        const {navigator} = this.props;
        if (navigator) {
            navigator.pop();
        }
    };
}

function startRegister(mobile, code, password) {
    alert(mobile + '--->' + code + '--->' + password);
}

const regBox = {
    regEmail: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,//邮箱
    regPswd: /^[A-Za-z0-9]{8,}$/,
    regMobile: /^0?1[3|4|5|8][0-9]\d{8}$/,//手机
    regTel: /^0[\d]{2,3}-[\d]{7,8}$/
};

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        padding: 30
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
    getCode: {
        width: 90,
        borderWidth: 0,
        height: 35
    },
    pswdErr: {
        position: 'absolute',
        right: 5, top: 20,
        color: 'red'
    },
    loginBtn: {
        flex: 1,
        backgroundColor: '#4357F4',
        borderWidth: 0
    },
    hintText: {
        color: '#C5C5C5',
        fontSize: 13
    },
    input: {
        flex: 1,
        padding: 0
    }
});