// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  * @flow
//  */

import React, { Component } from 'react';
import LoginOrRegister from './user/loginOrRegister';
import MasterInfo from './user/masterInfo';
import config from '../config';
import icons from '../Assets/icon';
import List from '../Components/list/index'


import {
  AppRegistry,
  Navigator,
  StyleSheet,
  TabBarIOS,
  TouchableHighlight,
  Text,
  View,
} from 'react-native';

class TabBarMain extends Component{
  constructor(props) {
    super(props);
  
    this.state = { 
      selectedTab: 'list',
      notifCount: 0,
      presses: 0,}
  }

  render() {
    return (
      <TabBarIOS
        tintColor={config.color.mainColor}
        barTintColor="#eee">
        <TabBarIOS.Item
          title="Blue Tab"
          icon={{uri: icons.first.list, scale: 4.6}}
          title="首页"
          selected={this.state.selectedTab === 'list'}
          onPress={() => {
            this.setState({
              selectedTab: 'list',
            });
          }}>
          <List/> 
        </TabBarIOS.Item>
        <TabBarIOS.Item
          icon={{uri: icons.first.collectioin, scale: 4.6}}
          title="收藏"
          badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
          selected={this.state.selectedTab === 'redTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'redTab',
              notifCount: this.state.notifCount + 1,
            });
          }}>
          <Text>history</Text>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          icon={{uri: icons.first.person, scale: 4.6}}
          title="我"
          selected={this.state.selectedTab === 'more'}
          onPress={() => {
            this.setState({
              selectedTab: 'more',
              presses: this.state.presses + 1
            });
          }}>
         <MasterInfo/>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    backgroundColor: 'red',
    padding: 10,
    margin: 20
  }
});


export { TabBarMain as default };








