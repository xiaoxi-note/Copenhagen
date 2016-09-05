'use strict';

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

let styles = StyleSheet.create({
	mainView:{
		flex:1,
		flexDirection: 'column',
	},
	conent:{
		flex:1,
	},
	mark:{
		height:25
	},
	markRegion:{
		height:15,
		overflow:'hidden'
	},
	topBar:{
		height:20
	},
	topRegion:{
		backgroundColor:'#1a99f1',
		paddingBottom:10,
	}
});

export { styles as default };
