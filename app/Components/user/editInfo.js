/**
 * React Native Course by ninghao.net
 */
'use strict';

import React, { Component } from 'react';
import config from '../../config'
import iconData from '../../Assets/icon'

import {
  Text,
  View,
  TextInput,
  ListView,
  StyleSheet,
  NavigatorIOS,
  Image
} from 'react-native';

import commStyles from '../../Styles/Comm'

class ViewInfo extends Component {
	constructor(props){
		super(props);
		
		this.state = {
			
		}
	}

	_renderList(){
				return(
					<View style={[styles.border]}>
						<View style={styles.listItem}>
							<View style={styles.iconRegion}>
								<Image
								  style={[styles.iconImg]}
								  source={{uri: iconData.list.my}} />
							</View>
							<View style={[styles.listConent]}>
								<View style={[styles.listContentTextRegion,commStyles.textAlignRegion]}>
									<Text style={styles.listContentText}>我的收藏</Text>
								</View>
								<View style={[commStyles.textAlignRegion,{width:20,marginRight:15}]}>
									<Image
									 style={[{height:25,opacity:.4}]}
									  source={{uri: iconData.rightIcon}} />
								</View>
							</View>
						</View>
						<View style={styles.listItem}>
							<View style={styles.iconRegion}>
								<Image
								  style={[styles.iconImg]}
								  source={{uri: iconData.list.collectioin}} />
							</View>
							<View style={[styles.listConent]}>
								<View style={[styles.listContentTextRegion,commStyles.textAlignRegion]}>
									<Text style={styles.listContentText}>我的贡献</Text>
								</View>
								<View style={[commStyles.textAlignRegion,{width:20,marginRight:15}]}>
									<Image
									 style={[{height:25,opacity:.4}]}
									  source={{uri: iconData.rightIcon}} />
								</View>
							</View>
						</View>
						<View style={styles.listItem}>
							<View style={styles.iconRegion}>
								<Image
								  style={[styles.iconImg]}
								  source={{uri: iconData.list.history}} />
							</View>
							<View style={[styles.listConent,{borderBottomWidth:0}]}>
								<View style={[styles.listContentTextRegion,commStyles.textAlignRegion]}>
									<Text style={styles.listContentText}>最近浏览</Text>
								</View>
								<View style={[commStyles.textAlignRegion,{width:20,marginRight:15}]}>
									<Image
									 style={[{height:25,opacity:.4}]}
									  source={{uri: iconData.rightIcon}} />
								</View>
							</View>
						</View>
					</View>
			)
	}

	_renderSetting(){
		return(
				<View style={[styles.border]}>
					<View style={styles.listItem}>
						<View style={[styles.listContentTextRegion,commStyles.textAlignRegion,styles.iconRegion,{paddingLeft:0}]}>
							<Text style={[styles.listContentText,{color:'red'},commStyles.textAlign]}>退出我的账号</Text>
						</View>
					</View>
				</View>)
		
		return (
			<View style={[styles.border]}>
				<View style={styles.listItem}>
					<View style={styles.iconRegion}>
						<Image
						  style={[styles.iconImg]}
						  source={{uri: iconData.list.my}} />
					</View>
					<View style={[styles.listConent]}>
						<View style={[styles.listContentTextRegion,commStyles.textAlignRegion]}>
							<Text style={styles.listContentText}>我的收藏</Text>
						</View>
						<View style={[commStyles.textAlignRegion,{width:20,marginRight:15}]}>
							<Image
							 style={[{height:25,opacity:.4}]}
							  source={{uri: iconData.rightIcon}} />
						</View>
					</View>
				</View>
			</View>
			)
	}



	render() {
		return (
				<View style={styles.main}>
					<View style={[styles.border,styles.userInfo]}>
						<View style={styles.userPic}></View>
						<View style={styles.userName}>
							<Text style={styles.text}>Super Man</Text>
							<Text style={[styles.text,{color:'#a4a4a4',fontSize:12,marginTop:5}]}>查看或编辑个人资料</Text>
						</View>
						<View style={[commStyles.textAlignRegion,{width:20,marginRight:15}]}>
							<Image
							 style={[{height:25,opacity:.4}]}
							  source={{uri: iconData.rightIcon}} />
						</View>
					</View>
					{this._renderList()}
					{this._renderSetting()}
				</View>
			)
	  }
}

class UserMaster extends Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
			<NavigatorIOS
		       	style={{backgroundColor: 'rgba(255,255,255,.6)',flex:1,height:30}}
		        initialRoute={{
		          title: '更多',
		          component: ViewInfo
		        }}
		        barTintColor='rgba(255,255,255,.6)'
		        titleTextColor="#535458"
		        tintColor="black"
		        translucent={true}
		      />
			)
	  }
}




let styles = StyleSheet.create({
	main:{
		flex:1,
		paddingTop:65,
		backgroundColor:'#f0eff5'
	},
	border:{
		borderTopWidth:1,
		borderBottomWidth:1,
		borderColor:config.borderColor,
		marginTop:15,
		backgroundColor:'#fff',		
		paddingLeft:20,
	},
	userInfo:{
		height:80,
		flexDirection:'row',
		paddingTop:15,
		paddingBottom:15,
	},
	userPic:{
		height:50,
		width:50,
		backgroundColor:"#d6dded",
		borderRadius:25,
		marginRight:10
	},
	userName:{
		height:35,
		marginTop:10,
		flexDirection:'column',
		flex:1
	},
	text:{
		flex:1
	},
	listItem:{
		flexDirection:'row',
	},
	iconRegion:{
		width:30,
		paddingTop:12,
		paddingBottom:12,
		paddingRight:12,
	},
	iconImg:{
		height:20,
		opacity:.4
	},
	listConent:{
		flex:1,
		borderBottomWidth:1,
		borderColor: config.borderColor,
		flexDirection:'row',
	},
	listContentTextRegion:{
		flex:1,
	},
	listContentText:{
		fontSize:15,
		color:'#5c5c5c'
	}
	
});

export { UserMaster as default };
