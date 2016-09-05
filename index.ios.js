// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  * @flow
//  */

import React, { Component } from 'react';
import TabBarMain from './app/Components/Main';

import {Tip} from './app/util/index'

import {
  AppRegistry,
  Navigator,
  View,
} from 'react-native';

class Copenhagen extends Component{
	constructor(props) {
	  	super(props)
		var viewData = {
			login:'login',
			tabBarMain:'tabBarMain',
		}

		this.state = {
	  	initView : viewData.tabBarMain,
	  	viewData : viewData
	  };
	}
  renderScene(route, navigator) {
    switch (route.id) {
      case 'tabBarMain':
        return <TabBarMain navigator={navigator}/>;
        break;
      case 'test':
        return <Test navigator={navigator}/>;
      case 'login':
      	return <LoginOrRegister navigator={navigator} />;
    }
  } 

  render() {
    return (
      <View style={{flex:1}}>
        <Navigator
          ref="navigator"
          renderScene={this.renderScene}
          initialRoute={{id: this.state.initView}}      
          />
          <Tip/>
        </View>
    );
  }
}


AppRegistry.registerComponent('Copenhagen', () => Copenhagen);








