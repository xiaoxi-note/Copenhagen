/**
 * React Native Course by ninghao.net
 */
'use strict';

import React, { Component } from 'react';
import styles from '../Styles/BottomBar';

import {
  Text,
  View,
  Image,
} from 'react-native';

class BottomBar extends Component {

	constructor(props){
			super(props);
			this.state = {
				imageUrl :'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png'
			}
	}
  render() {
    return (
		<View>
		<View style={styles.footBar}>
						<View style={styles.footBarItem}>
								<Image source={{uri:this.state.imageUrl}} style={styles.footBarItemImg}></Image>
							<Text style={styles.footBarItemText,styles.active}>消息</Text>
						</View>
						<View style={styles.footBarItem}>
								<Image source={{uri:this.state.imageUrl}} style={styles.footBarItemImg}></Image>
							<Text style={styles.footBarItemText}>消息</Text>
						</View>
						<View style={styles.footBarItem}>
								<Image source={{uri:this.state.imageUrl}} style={styles.footBarItemImg}></Image>
							<Text style={styles.footBarItemText}>消息</Text>
						</View>
					</View>
		</View>
		)
  }
}

export { BottomBar as default };
