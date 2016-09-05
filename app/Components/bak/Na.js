/**
 * React Native Course by ninghao.net
 */
'use strict';

import React, { Component } from 'react';
import MainView from './MainView.js';

import {
  Text,
  View,
  NavigatorIOS,    
  TouchableHighlight,   
} from 'react-native';


class Na extends Component {
  render() {
    return (
      <NavigatorIOS
       	style={{backgroundColor: '#eae7ff',flex:1}}
        initialRoute={{
          title: '朕',
          component: Inner
        }}
        shadowHidden={true}
        barTintColor="darkslateblue"
        titleTextColor="rgba(255, 255, 255, 1)"
        tintColor="rgba(255, 255, 255, 1)"
        translucent={true}
      />
    );
  }
}
class Inner extends Component {

	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	pushView(){
		  this.props.navigator.push({
	      title: 'new view',
	      component: MainView,   
	       });
	}

  render() {
    return (
    	<View >
     		<Text>dddddddd1</Text>
     		<Text>dddddddd12</Text>
     		<Text>dddddddd123</Text>
     		<Text>dddddddd12345</Text>
     		<Text>dddddddd120000000</Text>
     		<Text>dddddddd</Text>
     		<Text>dddddddd</Text>
     		<Text>dddddddd</Text>
     		<Text>dddddddd</Text>
     		<Text>dddddddd</Text>
     		<Text>dddddddd</Text>
     		<Text>dddddddd</Text>
     		<Text>dddddddd</Text>
     		<Text>dddddddd</Text>
     		<Text>dddddddd</Text>
     		<TouchableHighlight
				        underlayColor="rgba(34, 26, 38, 0.1)"
				        onPress={() => this.pushView()}
				      >
     		<Text >dddddddd</Text>
     		</TouchableHighlight>
     	</View>
    );
  }
}

export { Na as default };
