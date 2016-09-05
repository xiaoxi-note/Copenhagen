/**
 * React Native Course by ninghao.net
 */
'use strict';

import React, { Component } from 'react';
import config from '../../config'
import {
  Text,
  View,
  TextInput,
  ListView,
  StyleSheet,
} from 'react-native';

import commStyles from '../../Styles/Comm'

class LoginOrRegister extends Component {
	constructor(props){
		super(props);
		var descriptionData  = {
			login:{
				button:'登录',
				psDesc:'没有账号？去注册'
			},register:{
				button:'注册',
				psDesc:'已有账号？去登录'
			}
		};
		this.state = {
			state :'login',
			stateData:{
				login:'login',
				register:'register'
			},
			descriptionData:descriptionData,
			nowDesc : descriptionData.login,
			userName:'',
			pwd:'',
			name:'',
			buttonDisable:false,
			config : config,
			title:config.title,
			isInputing :false,
			setTimeoutObj:undefined
		}
		this.dataSource = new ListView.DataSource({
		  rowHasChanged: (row1, row2) => row1 !== row2
		});
	}

	_renderLogin(){
		return (
				<View style={{flex:1}}>
					<View style={{flex:1}}></View>
					<View style={styles.underLine}>
						<TextInput style={styles.text} value={this.state.userName}  onChangeText={(text) => this.setState({userName:text})} placeholder="手机号(大陆手机号)"
							onFocus={()=>this._textInputFocus()}  onEndEditing={()=>this._textInputBlur()}/>
						<Text style={styles.clearn} onPress={()=>this.setState({userName:''})}>{this.state.userName === ''?'':'+'}</Text>
					</View>
					<View style={styles.underLine}>
						<TextInput style={styles.text} value={this.state.pwd}  onChangeText={(text) => this.setState({pwd:text})}  password="true" placeholder="密码(不少于6位)" 
							onFocus={()=>this._textInputFocus()}  onEndEditing={()=>this._textInputBlur()}/>
						<Text style={styles.clearn} onPress={()=>this.setState({pwd:''})}>{this.state.pwd === ''?'':'+'}</Text>
					</View>
				</View>
			)
	}

	_textInputBlur(){
		
		var self = this
		   this.timer = setTimeout(() => {
						        this.setState({isInputing:false})
							},50);
	}
	_textInputFocus(){
		this.timer &&  clearTimeout(this.timer)
		this.setState({isInputing:true})
	}

	_renderRegister(){
		return (
				<View style={{flex:1}}>
					<View style={{flex:1}}></View>
					<View style={styles.underLine}>
						<TextInput style={styles.text} value={this.state.name}  onChangeText={(text) => this.setState({name:text})}  placeholder="姓名" 
							onFocus={()=>this._textInputFocus()}  onEndEditing={()=>this._textInputBlur()}/>
						<Text style={[styles.clearn]} onPress={()=>this.setState({name:''})}>{this.state.name === ''?'':'+'}</Text>
					</View>
					<View style={styles.underLine}>
						<TextInput style={styles.text} value={this.state.userName}  onChangeText={(text) => this.setState({userName:text})}   placeholder="手机号(大陆手机号)" 
							onFocus={()=>this._textInputFocus()}  onEndEditing={()=>this._textInputBlur()}/>
						<Text style={styles.clearn} onPress={()=>this.setState({userName:''})}>{this.state.userName === ''?'':'+'}</Text>
					</View>
					<View style={styles.underLine}>
						<TextInput style={styles.text} value={this.state.pwd}  onChangeText={(text) => this.setState({pwd:text})}  password="true" placeholder="密码(不少于6位)" 
							onFocus={()=>this._textInputFocus()}  onEndEditing={()=>this._textInputBlur()}/>
						<Text style={styles.clearn} onPress={()=>this.setState({pwd:''})}>{this.state.pwd === ''?'':'+'}</Text>
					</View>
				</View>
		)
	}

	_getMainRender(){
	 return this.state.state === this.state.stateData.login? this._renderLogin(): this._renderRegister()
	}

	_tiggerState(){

		var state,nowDesc;
		if(this.state.state === this.state.stateData.login){
			state = this.state.stateData.register
			nowDesc = this.state.descriptionData.register
			this.state.buttonDisable  = this.state.userName && this.state.pwd
		}else{
			state = this.state.stateData.login
			nowDesc = this.state.descriptionData.login
			this.state.buttonDisable  = this.state.userName && this.state.pwd && this.state.name
		}

		this.setState({state :state,nowDesc:nowDesc});
	}
	_getButtonState (){
		var result  = false;
		if(this.state.state === this.state.stateData.login){
		  result = this.state.userName && this.state.pwd
		}else{
			result = this.state.userName && this.state.pwd && this.state.name
		}
		return !result
	}
	_getTopRender(){
		if(this.state.isInputing){
			return (
					<View style={styles.setTopRegion}></View>
					)
		}else{
			return (
					<View style={[styles.topRegion,{justifyContent:'center'}]}>
						<Text style={[commStyles.textAlign,{fontSize:30}]}>{this.state.title}</Text>
					</View>
					)
		}
	}

	render() {
		return (
			<View style={styles.main}>
				{this._getTopRender()}
				<View style={styles.mainRegion}>
					{this._getMainRender()}
					<View style={[styles.button,this._getButtonState() && styles.disabled]}>
						<Text style={[commStyles.textAlign,{color:'#fff',fontSize:15,lineHeight:24}]}>
							{this.state.nowDesc.button}
						</Text>
					</View>
				</View>
				<View style={styles.bottomRegion}>
					<Text onPress={()=>this._tiggerState()} style={[commStyles.textAlign,styles.psRegion]}>
						{this.state.nowDesc.psDesc}
					</Text>
				</View>
			</View>
			)
	  }
}

let styles = StyleSheet.create({
		main:{
			flex:1,
		},
		topRegion:{
			flex:1,
		},
		mainRegion:{
			height:200,
		},
		bottomRegion:{
			flex:1,
		},
		text:{
			height:30,
			fontSize:15,
			flex:1
		},
		underLine:{
			borderBottomWidth:.5,
			borderBottomColor:"#e9e9e9",
			marginLeft:10,
			marginRight:10, 
			marginTop:5,
			marginBottom:5,
			flexDirection:'row'
		},
		clearn:{
			fontSize:25,
			color:"#d1d1d1", 
			transform: [{rotate:'45deg'}],
			paddingRight:5,
		},
		displayNone:{
			opacity:0
		},
		button:{
			height:35,
			marginLeft:10,
			marginRight:10,
			borderWidth:1,
			borderColor:config.color.mainColor,
			borderRadius:5,
			backgroundColor:config.color.mainColor,
			marginTop:10,
			marginBottom:10
		},
		disabled:{
			opacity:.7
		},
		psRegion:{
			fontSize:15,
			color:"#949494",
			marginTop:15
		},
		setTopRegion:{
			height:40
		}
});

export { LoginOrRegister as default };
