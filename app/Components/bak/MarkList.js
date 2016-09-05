/**
 * React Native Course by ninghao.net
 */
'use strict';

import React, { Component } from 'react';

import {
  Text,
  View,
  TextInput,
  ListView,
  StyleSheet,
  
} from 'react-native';

import commStyles from '../Styles/Comm'


class MarkList extends Component {
	constructor(props){
		super(props);
		var markData = 'FE,PHP,cccc,dddd,eeee,ffff,gggg'.split(',');
		this.state = {
			markData: markData
		}
		this.dataSource = new ListView.DataSource({
		  rowHasChanged: (row1, row2) => row1 !== row2
		});
	}



	renderMark(mark){
		return (
			<View style={styles.markRegion}>
				<Text style={[styles.markItem,commStyles.textAlign]}>
					{mark}
				</Text>
			</View>
		)
	}

	render() {
		return (
			<View style={styles.main}>
				<View>
					<ListView
					  horizontal={true}
			          pageSize={this.state.markData.count}
			          initialListSize={this.state.markData.count}
			          dataSource={this.dataSource.cloneWithRows(this.state.markData)}
			          renderRow={this.renderMark.bind(this)}
			        />
				</View>
			</View>
			)
	  }
}

let styles = StyleSheet.create({
		main:{
			flex:1,
			backgroundColor:'red',
		},
		markRegion:{

			height:20,
		},
		markItem:{
			flex:1,
			paddingLeft:10,
			paddingRight:10,
		}
});

export { MarkList as default };
