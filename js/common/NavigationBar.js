import React, {Component, PureComponent} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Platform,
    TouchableOpacity,
    StatusBar,
    Dimensions,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

var {height, width} = Dimensions.get('window');

const PropTypes = React.PropTypes;

class NavigationBar extends PureComponent {

    static propTypes = {
        title: PropTypes.string,
        leftTitle: PropTypes.string,
        leftImage: PropTypes.string,
        leftAction: PropTypes.func,
        rightTitle: PropTypes.string,
        rightImage: PropTypes.string,
        rightAction: PropTypes.func,
        titleView: PropTypes.object,
        hiddenLeft: PropTypes.bool,
        hiddenRight: PropTypes.bool,
        hiddenNavigationBar: PropTypes.bool,
    }

    static defaultProps = {
        hiddenNavigationBar: false,
        hiddenLeft: false,
        hiddenRight: false,
    }

    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) {
        this.props = Object.assign({}, nextProps.props);
    }

    render() {
        if (this.props.hiddenNavigationBar) {
            return null;
        }

        // leftTitle和leftImage 优先判断leftTitle (即 文本按钮和图片按钮优先显示文本按钮)
        // 返回按钮设置默认图标
        var leftImg = this.props.leftImage ? this.props.leftImage : "ios-arrow-back";

        return (
            <View style={[styles.barView, this.props.style]}>
                <StatusBar barStyle={'light-content'}/>
                <View style={ styles.showView }>
                    {
                        this.props.leftTitle
                            ?
                            <TouchableOpacity style={styles.leftNav} onPress={ ()=> {
                                this.props.leftAction()
                            } }>
                                <View style={{alignItems: 'center'}}>
                                    <Text style={styles.barButton}>{this.props.leftTitle}</Text>
                                </View>
                            </TouchableOpacity>
                            :
                            (
                                !this.props.hiddenLeft ?
                                    <TouchableOpacity style={styles.leftNav} onPress={ ()=> {
                                        this.props.leftAction()
                                    } }>
                                        <View style={{alignItems: 'center'}}>
                                            {/*<Image source={ leftImage }/>*/}
                                            <Icon
                                                name={leftImg}
                                                size={27}
                                                color='white'
                                            />
                                        </View>
                                    </TouchableOpacity>
                                    : null
                            )
                    }
                    {
                        this.props.title ?
                            <Text style={styles.title}>{this.props.title || ''}</Text>
                            :
                            <View style={styles.titleView}>
                                {this.props.titleView}
                            </View>
                    }
                    {
                        this.props.rightTitle ?
                            <TouchableOpacity style={styles.rightNav} onPress={ ()=> {
                                this.props.rightAction()
                            } }>
                                <View style={{alignItems: 'center'}}>
                                    <Text style={styles.barButton}>{this.props.rightTitle}</Text>
                                </View>
                            </TouchableOpacity>
                            : (this.props.rightImage ?
                                <TouchableOpacity style={styles.rightNav} onPress={ ()=> {
                                    this.props.rightAction()
                                } }>
                                    <View style={{alignItems: 'center'}}>
                                        {/*<Image source={ rightImage }/>*/}
                                        <Icon
                                            name={this.props.rightImage}
                                            size={30}
                                            color='white'
                                        />
                                    </View>
                                </TouchableOpacity>
                                : null
                        )
                    }

                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    barView: {
        height: Platform.OS === 'android' ? 44 : 64,
        // backgroundColor: '#4E78E7',
        backgroundColor: 'rgb(26, 167, 242)',
    },
    showView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: Platform.OS === 'android' ? 0 : 20,
        height: 44,
    },
    title: {
        color: 'white',
        fontSize: 18.0,
    },
    titleView: {
        justifyContent: 'center',
        alignItems: 'center',
        top: 0,
        bottom: 0,
        width: width*0.4,
    },
    leftNav: {
        position: 'absolute',
        top: 8,
        bottom: 8,
        left: 8,
        justifyContent: 'center',
    },
    rightNav: {
        position: 'absolute',
        right: 8,
        top: 8,
        bottom: 8,
        justifyContent: 'center',
    },
    barButton: {
        color: 'white',
        fontSize: 18
    },
})


export default NavigationBar
