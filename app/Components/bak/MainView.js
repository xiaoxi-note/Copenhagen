/**
 * React Native Course by ninghao.net
 */
'use strict';

import React, { Component } from 'react';
import BottomBar from './BottomBar';
import Search from './Search';
import MarkList from './MarkList';

import styles from '../Styles/Main';

import {
  Text,
  View,
  TextInput
} from 'react-native';

class MainView extends Component {

  render() {
    return (
		<View style={styles.mainView}>
			<View style={styles.conent}>
				<View style={styles.topRegion}>
					<View style={styles.topBar}></View>
					<View style={styles.markRegion}>
						<View style={styles.mark}>
							<MarkList />
						</View>
					</View>
				</View>
			</View>
			<BottomBar/>
		</View>
		)
  }
}

export { MainView as default };
