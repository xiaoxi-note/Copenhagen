

import React, { Component } from 'react';
import {
  Dimensions
} from 'react-native';


var {height, width} = Dimensions.get('window');

const config = {
	title:'哥本哈根',
	color:{
		mainColor:'#65a7e5',
		secondColor:'#868686',
		backgroundColor:'#f0f0f0',
		QColor:'#000',
		AColor:'rgba(0,0,0,.7)',
		red:'red',
	},
	borderColor:'rgba(210,210,212,.8)',
	TouchableHighlightColor:'rgba(0,0,0,.1)',
	tabBarControlCollor:'rgba(0,0,0,.6)',
	window:{
		width:width,
		height:height
	}
}

export { config as default };