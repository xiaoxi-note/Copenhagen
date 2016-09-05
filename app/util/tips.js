/**
 * React Native Course by ninghao.net
 */
'use strict';

import React, { Component } from 'react';

import commStyles  from '../Styles/Comm'
import config  from '../config'

import {
    Text,
    View,
    StyleSheet,
    Animated
} from 'react-native';

var height      = config.window.height,
    width       = config.window.width,
    buttonWidth = config.window.width - 20,
    itemHeight  = 40,
    baseHeight  = 75;
class SelectComponent extends Component {
    constructor(props) {
        super(props);
        var data   = [{
            text:  '确定',
            value: 'sure',
            type:  'warning',
            key:   '123'
        }, {
            text:  '不确定',
            value: 'sure-no',
            type:  'warning',
            key:   '123we'
        }, {
            text:  '非常确定',
            value: 'sure-no!',
            type:  'warning',
            key:   '123s'
        }]
        this.state = {
            bounceValue: new Animated.Value(0),
            transparentValue: new Animated.Value(0),
            showState:   true,
            data:        data
        }
    }

    show() {

    }

    componentDidMount() {
        this.state.bounceValue.setValue(-300);
        Animated.sequence([Animated.spring(
            this.state.bounceValue,
            {
                toValue:  5,
                friction: 7,
            }
        )]).start();
    }

    _setBottom() {
        console.log(JSON.stringify(arguments));
    }

    _hidden() {

        setTimeout(()=>this.setState({showState: false}), 500);
        // // this.refs.tipRegion.measure(this._setBottom)
        // this.state.bounceValue.setValue(130);     // 设置一个较大的初始值
        Animated.sequence(
            [Animated.spring(this.state.bounceValue,
                {
                    toValue:  -300,
                    friction: 7,
                }
            )]).start();
    }

    _renderContent(item, index, isLast) {
        console.log(JSON.stringify(item));

        if (isLast) {
            return (
                <View key={index}>
                    <View>
                        <Text style={[commStyles.textAlign,styles.contentText,{paddingBottom:0}]}>{item.text}</Text>
                    </View>
                </View>
            )
        } else {
            console.log('render test')
            return (
                <View key={index}>
                    <View>
                        <Text style={[commStyles.textAlign,styles.contentText]}>{item.text}</Text>
                    </View>
                    <View style={{borderBottomWidth:1,height:1,borderBottomColor:config.borderColor}}></View>
                </View>
            )
        }
    }

    _renderHeader() {
        return (
            <View key="s">
                <View>
                    <Text style={[commStyles.textAlign,styles.ps]}>想要成功率？点确定啊~~~</Text>
                </View>

                <View style={{borderBottomWidth:1,height:1,borderBottomColor:config.borderColor}}></View>
            </View>
        )
    }

    render() {
        if (!this.state.showState) {
            return (<View ref="tipObj"></View>);
        } else {
            return (
                <View style={[styles.background,{backgroundColor: 'rgba(0,0,0,.3)'}]} ref="tipObj"
                      onMagicTap={()=>this._hidden()}>
                    <Animated.View ref="tipRegion" style={[styles.contentRegion,{bottom:this.state.bounceValue}]}>
                        <View style={[styles.content,commStyles.textAlignRegion]}>
                            {this._renderHeader()}
                            {this.state.data.map((item, index)=>this._renderContent(item, index, index === this.state.data.length - 1))}
                        </View>
                        <View style={[styles.control,commStyles.textAlignRegion]}>
                            <Text style={[commStyles.textAlign,styles.controlText]}
                                  onPress={()=>this._hidden()}>取消</Text>
                        </View>
                    </Animated.View>
                </View>)
        }
    }
}


const styles = StyleSheet.create({
    background:    {
        position:        'absolute',
        height:          height,
        width:           width,
        bottom:          0
    },
    contentRegion: {
        width:       buttonWidth,
        position:    'absolute',
        marginLeft:  10,
        marginRight: 20,
        bottom:      5,
    },
    content:       {
        backgroundColor: '#fff',
        paddingBottom:   10,
        borderRadius:    8,
        marginTop:       5,
        paddingTop:      8,
    },
    control:       {
        backgroundColor: '#fff',
        paddingTop:      10,
        paddingBottom:   10,
        borderRadius:    8,
        marginTop:       5,
    },
    controlText:   {
        fontSize:   18,
        color:      config.color.mainColor,
        fontWeight: 'bold'
    },
    contentText:   {
        fontSize:      18,
        color:         config.color.mainColor,
        paddingTop:    10,
        paddingBottom: 10
    },
    ps:            {
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        color:             config.color.secondColor,
        fontSize:          12,
        paddingBottom:     8
    }
})

export { SelectComponent as default };
