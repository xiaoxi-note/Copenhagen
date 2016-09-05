// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  * @flow
//  */

import React, { Component } from 'react';
import config from '../../config';
import icons from '../../Assets/icon';
import Search from './Search'
import {
  AppRegistry,
  Navigator,
  StyleSheet,
  TabBarIOS,
  TouchableHighlight,
  Text,
  View,
} from 'react-native';

class List extends Component{
    constructor(props) {
      super(props);
    
      this.state = {};
    }
    render(){
      return (

            <View style={styles.main}>
              <Search/>
            </View>
            )
    }
}

const styles = StyleSheet.create({
  main:{
    paddingTop:25,
    backgroundColor:'#fff'
  }
});


export { List as default };








