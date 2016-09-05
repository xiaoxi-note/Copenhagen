/**
 * React Native Course by ninghao.net
 */
'use strict';

import React, { Component } from 'react';
import config from '../../config'
import iconData from '../../Assets/icon'
import Select from '../../util/select'

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
  PickerItemIOS
} from 'react-native';

import commStyles from '../../Styles/Comm'

class ViewInfo extends Component {
	constructor(props){
		super(props);


		let sexData = [{
        		value:'man',
        		text:'男'
        	},{
        		value:'women',
        		text:'女'
        	}];
		this.state = {
			userName:'super man',
			description:'',
        	selectedIndex:1,
        	showSex:false,
        	sexData:sexData,
        	selectSexData:sexData[0],
        	company:'',
        	position:''
		}
	}

	selectData(data){
		this.setState({showSex:false});
		var result;

		if(data.state === 'ok'){
			[].forEach.call(this.state.sexData,function(item){
				if(item.value === data.data){
					result  = item;
				}
			})
		}
		
	 result && this.setState({selectSexData:result});
	}

	selectSex(){
		console.log(this.state.showSex)
		this.setState({showSex:!this.state.showSex});
		
	}

	render() {
		return (
				<View style={styles.main}>
					<View style={[styles.border]}>
						<View style={styles.userInfo}>
							<View style={[styles.userPic,commStyles.textAlignRegion]}>
								<Text style={[commStyles.textAlign,{opacity:.5}]}>编辑</Text>
							</View>
							<View style={{flex:1}}>
								<View style={[styles.userName]}>
									<TextInput style={[styles.text]} value={this.state.userName} placeholder='姓名'/>
								</View>		
								<View style={[styles.userName]}>
									<TextInput style={[styles.text]} value={this.state.description} placeholder='一句话的自白'/>
								</View>
							</View>
						</View>
						<View style={[styles.sexRegion,commStyles.textAlignRegion,styles.descriptionRegion]} >
							<TextInput placeholder="个人简介(用一段话介绍你自己)" style={{flex:1,fontSize:13}} value={this.state.description}></TextInput>
						</View> 
						<TouchableHighlight
							underlayColor={config.TouchableHighlightColor}
							onPress={()=>this.selectSex()}
							>
							<View style={[styles.sexRegion,commStyles.textAlignRegion]} >
								<View style={[commStyles.textAlignRegion]}>
									<Text style={[commStyles.textAlign,styles.sexTitle]}>性别</Text>
								</View>
								<View style={styles.sexConent}>
									<TextInput placeholder="请选择性别" value={this.state.selectSexData.text} editable={false} style={{flex:1,fontSize:13,paddingLeft:10}}></TextInput>
								</View>
							</View>
						</TouchableHighlight>
						
						<View style={[styles.sexRegion,commStyles.textAlignRegion]} >
							<View style={[commStyles.textAlignRegion]}>
								<Text style={[commStyles.textAlign,styles.sexTitle]}>我司</Text>
							</View>
							<View style={styles.sexConent}>
								<TextInput placeholder="填写我司名称" value={this.state.company} style={{flex:1,fontSize:13,paddingLeft:10}}></TextInput>
							</View>
						</View>
						<View style={[styles.sexRegion,commStyles.textAlignRegion]} >
							<View style={[commStyles.textAlignRegion]}>
								<Text style={[commStyles.textAlign,styles.sexTitle]}>职位</Text>
							</View>
							<View style={styles.sexConent}>
								<TextInput placeholder="填写我的职位" value={this.state.company} style={{flex:1,fontSize:13,paddingLeft:10}}></TextInput>
							</View>
						</View>
					</View>
					{this.state.showSex  && (<Select callBack={(data)=>this.selectData(data)} show={this.state.showSex} data={this.state.sexData}/>)}
				</View>
			)
	  }
}


let styles = StyleSheet.create({
	main:{
		flex:1,
		paddingTop:63,
		backgroundColor:config.color.backgroundColor,
	},
	border:{
		borderTopWidth:1,
		borderBottomWidth:1,
		borderColor:config.borderColor,
		backgroundColor:'#fff',
	},
	userInfo:{
		flexDirection:'row',
		paddingTop:15,
		paddingBottom:15,
		paddingLeft:20,
	},
	userPic:{
		height:72,
		width:72,
		backgroundColor:"#d6dded",
		borderRadius:36,
		marginRight:10
	},
	userName:{
		height:30,
		flexDirection:'column',
		flex:1,
		borderBottomWidth:1,
		borderColor:config.borderColor,
		paddingBottom:0,
	},
	text:{
		flex:1,
		fontSize:13
	},
	sexRegion:{
		height:40,
		borderBottomWidth:1,
		borderColor:config.borderColor,	
		flexDirection:'row',
		paddingTop:10,
		paddingBottom:10,
		paddingLeft:20,
	},
	sexConent:{
		flex:1,
		borderLeftWidth:1,
		borderColor:config.borderColor,	
	},
	sexTitle:{
		marginRight:10,
		fontSize:13
	},
	descriptionRegion:{
		borderTopWidth:0
	},
	texteare:{
		flex:1,
		height:30,
		paddingLeft:10,
		fontSize:13
	}
});

export { ViewInfo as default };
