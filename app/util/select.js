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
  TextInput,
  ListView,
  StyleSheet,
  NavigatorIOS,
  Image,
  TouchableHighlight,
  PickerIOS,
  PickerItemIOS,
  Dimensions
} from 'react-native';


class SelectComponent extends Component {
	constructor(props){
		super(props);
		var {height, width} = Dimensions.get('window');
		this.state = {
			data:this.props.data,
			width:width,
			height:height,
			pickerTop:height/2,
			selectIndex:'value1',
		}
	}
	getSelection(){
		let result = {state:'ok',data:this.state.selectIndex};
		return  this.props.callBack(result);
	}
	getCancel(){
		let result = {state:'no'};
		return  this.props.callBack(result);
	}
	render() {
		
		return (
				<View style={[{position:'absolute',height:600,width:320,left:0,backgroundColor:'rgba(0,0,0,.5)',top:0, flexDirection: 'column'}]}
					>
					<View style={{flexDirection:'row',top:283,backgroundColor:'#fff',transform: [{translateY:-100}],paddingLeft:10,paddingRight:10,paddingTop:10}}>
						<Text style={{color:config.color.mainColor}} onPress={()=>this.getCancel()}>取消</Text>
						<View style={{flex:1}}></View>
						<Text style={{color:config.color.mainColor}} onPress={()=>this.getSelection()} >确定</Text>
					</View>
		        <PickerIOS style={{top:283,backgroundColor:'#fff',transform: [{translateY:-100}]}}
		        onValueChange={(index) => {this.setState({selectIndex:index})}}
		        selectedValue={this.state.selectIndex}>
		           {Object.keys(this.state.data).map((index) => (
			            <PickerItemIOS 
			              key={this.state.data[index].value.toString()}
			              value={this.state.data[index].value.toString()}
			              label={this.state.data[index].text.toString()}
			            />
			          ))}
		        </PickerIOS>
		   </View>
			)
	  }
}

export { SelectComponent as default };
