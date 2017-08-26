import React, {PureComponent, PropTypes} from 'react';

import {
    View,
    Image,
    Text,
    TouchableHighlight,
    StyleSheet,
} from 'react-native';

export default class SelectItem extends PureComponent {

    static propTypes = {
        ...View.propTypes,
        showLine: PropTypes.bool,
        onPress: PropTypes.func,
        icon: PropTypes.string,
        title: PropTypes.string,
    }

    render() {
        return (
            <TouchableHighlight underlayColor="#E6E6E6" onPress={this.props.onPress}>
                <View style={selectItemStyle.item}>
                    <View style={selectItemStyle.container}>
                        <Image source={this.props.icon} style={selectItemStyle.img}/>
                        <Text style={selectItemStyle.title}>{this.props.title}</Text>
                        <Image source={require('./img/ic_more.png')} style={selectItemStyle.skipImg}/>
                    </View>
                    {this.props.showLine ? <View style={selectItemStyle.underline}/> : null}
                </View>
            </TouchableHighlight>
        )
    }
}

const selectItemStyle = StyleSheet.create({

    item: {
        flexDirection: 'column',
        backgroundColor: 'white'
    },

    container: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center'
    },

    img: {
        width: 20,
        height: 20,
        marginLeft: 20,
    },

    title: {
        flex: 1,
        marginLeft: 15,
    },

    skipImg: {
        marginRight: 20
    },

    underline: {
        height: 0.5,
        backgroundColor: "#E6E6E6",
        marginLeft: 10,
        marginRight: 10
    }
})