

import React, { Component } from 'react';
import MainView from './MainView'
import MarkList from './MarkList'

import {
  AppRegistry,
  Navigator,
  StyleSheet,
  TabBarIOS,
  TouchableHighlight,
  Text,
  View,
} from 'react-native';


class Main extends Component{

  constructor(props) {
    super(props);
  
    this.state = { 
      selectedTab: 'redTab',
      notifCount: 0,
      presses: 0,}
    ;
  }

  _renderContent(color: string, pageText: string, num?: number) {
    return (
      <View style={styles.container}>
        <Text style={styles.tabText}>{pageText}</Text>
        <Text style={styles.tabText}>{num} re-renders of the {pageText}</Text>
        <TouchableHighlight style={styles.button} onPress={() => this.props.navigator.push({id: 'test'})}>
          <Text>Push New Scene</Text>
        </TouchableHighlight>
      </View>
    );
  }

  render() {
    return (
      <TabBarIOS
        tintColor="white"
        barTintColor="#eee">
        <TabBarIOS.Item
          title="Blue Tab"
          systemIcon="history"
          selected={this.state.selectedTab === 'blueTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'blueTab',
            });
          }}>
          <Text>ssss</Text>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon="history"
          badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
          selected={this.state.selectedTab === 'redTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'redTab',
              notifCount: this.state.notifCount + 1,
            });
          }}>
          <MainView />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon="more"
          selected={this.state.selectedTab === 'greenTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'greenTab',
              presses: this.state.presses + 1
            });
          }}>
          {this._renderContent('#21551C', 'Green Tab', this.state.presses)}
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


export { Main as default };
