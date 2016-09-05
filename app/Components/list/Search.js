/**
 * React Native Course by ninghao.net
 */
'use strict';

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import commStyles from '../../Styles/Comm'
import config from '../../config'
import icons from '../../Assets/icon'

import {
  Text,
  View,
  TextInput,
  Image
} from 'react-native';

class MainView extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	searchKey:'',
	  	searchState:false
	  };
	}

	_searchFocus(){
		this.setState({searchState : true});
	}

	_searchBlur(){
		this.setState({searchState : false});
	}

	_renderSearch(){
		return(
				<View style={styles.tagRegion}>
					<View style={[styles.tagItem,commStyles.textAlignRegion]}>
						<Image
						  style={styles.tagImage}
						  source={{uri: icons.main.question}} />
						<View style={[commStyles.textAlignRegion]}>
							<Text style={[commStyles.textAlign,styles.tagText]}>提问</Text>
						</View>
					</View>
					<View style={[styles.tagItem,commStyles.textAlignRegion]}>
						<Image
						  style={styles.tagImage}
						  source={{uri: icons.main.up}} />
						<View style={[commStyles.textAlignRegion]}>
							<Text style={[commStyles.textAlign,styles.tagText]}>回答</Text>
						</View>
					</View>
					<View style={[styles.tagItem,commStyles.textAlignRegion]}>
						<Image
						  style={styles.tagImage}
						  source={{uri: icons.main.down}} />
						<View style={[commStyles.textAlignRegion]}>
							<Text style={[commStyles.textAlign,styles.tagText]}>答复</Text>
						</View>
					</View>
				</View>
			)
	}

	render() {
		return (
			<View>
				<View style={[styles.searchRegion,commStyles.textAlignRegion]}>
					<View style={{flex:1}}>
						<TextInput
							style={[styles.searchOutInput,commStyles.textAlign]}
							placeholder="搜索公司、语言"
							value={this.state.searchKey}
							onFocus={()=>this._searchFocus()}
							autoFocus={this.state.searchState}
							autoCorrect={false}
							ref="inputSearchKey"></TextInput>
					</View>
					{ this.state.searchState && (
							<View style={commStyles.textAlignRegion}>
								<Text onPress={()=>this._searchBlur()} style={styles.cancelText}>取消</Text>
							</View>
							)
					}
				</View>
				{this._renderSearch()}
			</View>
		)
  }
}

let styles = StyleSheet.create({
	searchRegion:{
		paddingLeft:10,
		paddingRight:10,
		flexDirection:'row',
		borderBottomWidth:1,
		paddingBottom:10,
		borderBottomColor:config.borderColor,
		
	},
	searchOutInput:{
		borderRadius:5,
		height:25,
		flex:1,
		backgroundColor:'#eeeeee'
	},
	cancelText:{
		color:config.color.mainColor,
		paddingLeft:10,
		paddingRight:10
	},
	tagRegion:{
		height:40,
		flexDirection:'row',
		borderBottomWidth:1,
		borderBottomColor:config.borderColor,
		paddingTop:12,
		paddingBottom:12,
	},
	tagItem:{
		flex:1,
		flexDirection:'row',
		borderRightWidth:1,
		borderRightColor:config.borderColor
	},
	tagImage:{
		height:15,
		width:15,
		opacity:.5
	},
	tagText:{
		fontSize:15,
		paddingLeft:5,
		color:'#646464',
		fontWeight:'bold'
	}
});

export { MainView as default };
