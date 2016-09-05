'use strict';

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

let BottomBar = StyleSheet.create({
	footBar:{
		height:50,
		backgroundColor:'#fff',
		borderTopWidth:1,
		borderTopColor:'#eee',
		flexDirection: 'row',
	},
	footBarItem:{
		flex:1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
	footBarItemImg:{
		height:30,
		width:30,
	},
	footBarItemText:{
		color:'#666',
		textAlign:'center',
		fontSize:10,
		flex:1,
	},
	active:{
		color:'red',
		textAlign:'center',
		fontSize:10,
		flex:1,
	}
});

export { BottomBar as default };
