// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  * @flow
//  */

import React, { Component } from 'react';
import config from '../../config';
import icons from '../../Assets/icon';
import Header from './header';
import commStyles from '../../Styles/Comm';
import SGListView from 'react-native-sglistview';
import { Tip } from '../../util/index'

import {
  AppRegistry,
  Navigator,
  StyleSheet,
  TabBarIOS,
  TouchableHighlight,
  Text,
  View,
  ListView,
  Image,
  ScrollView,
  NavigatorIOS,
  Dimensions
} from 'react-native';

var LIST_VIEW = "listview";
class List extends Component{
    constructor(props) {
      super(props);
        var markData = 'FE,PHP,c++,java,sql,oracle,javascript,.net,node,test,fuck,FE,PHP,c++,java,sql,oracle,javascript,.net,node,test,fuck,FE,PHP,c++,java,sql,oracle,javascript,.net,node,test,fuck,FE,PHP,c++,java,sql,oracle,javascript,.net,node,test,fuck,FE,PHP,c++,java,sql,oracle,javascript,.net,node,test,fuck,FE,PHP,c++,java,sql,oracle,javascript,.net,node,test,fuck,FE,PHP,c++,java,sql,oracle,javascript,.net,node,test,fuck,FE'.split(',');

      a = {
           user: {
               img: 'https://m.baidu.com/static/index/plus/plus_logo.png',
               userName: 'JSer'
           },
           Q: {
               type: 'text',
               title: 'Reactjs 组件的更新原理Reactjs 组件的更新原理Reactjs 组件的更新原理Reactjs 组件的更新原理Reactjs 组件的更新原理'
           },
           A: {
               content: '这个方法的主要目的，是弥补数组构造函数Array()的不足。因为参数个数的不同，会导致Array()的行为有差异。'
           },
           extend: {
               wonderful: 0,
               answer: 0,
               isCollection: 0
           }
       }     
        d = {
           user: {
               img: 'https://m.baidu.com/static/index/plus/plus_logo.png',
               userName: 'JSer'
           },
           Q: {
               type: 'img',
               data:[
                {url:'https://m.baidu.com/static/index/plus/plus_logo.png'},
                {url:'https://m.baidu.com/static/index/plus/plus_logo.png'},
                {url:'https://m.baidu.com/static/index/plus/plus_logo.png'},
                {url:'https://m.baidu.com/static/index/plus/plus_logo.png'},
               ]
           },
           A: {
               content: '这个方法的主要目的，是弥补数组构造函数Array()的不足。因为参数个数的不同，会导致Array()的行为有差异。'
           },
           extend: {
               wonderful: 0,
               answer: 0,
               isCollection: 0
           }
       }

       var QTypeData = {
          text:'text',
          img:'img'
       }
        // markData =markData.concat(markData);
        var stateData = [];
        [].forEach.call(markData,function(str,index){
          if('1,3,6,7,8,'.indexOf(index)){
            stateData.push(d);
          }
          stateData.push(a);
        })
        this.state = {
          markData: stateData,
          QTypeData:QTypeData
        }
        this.dataSource = new ListView.DataSource({
          rowHasChanged: (row1, row2) => row1.uuid !== row2.uuid
        });
    }
    componentWillMount(){
    }
    componentDidMount(){

    }
    componentWillUnmount(){
    }
    
    _listRender(){
      return(
        <View style={[styles.main,{overflow:'hidden'}]}>
          <ListView
                style={{overflow:'hidden'}}
                pageSize={this.state.markData.count}
                removeClippedSubviews={true}
                initialListSize={this.state.markData.count}
                dataSource={this.dataSource.cloneWithRows(this.state.markData)}
                renderRow={this.renderMark.bind(this)}
              />
        </View>
        )
    }
    
    render(){
      return (
              <View style={styles.main} ref="main">
                <View style={styles.content}>
                  <Header/>
                  
                  {this._listRender()}
                </View>
                <View style={styles.footRegion}></View>
              </View>
            )
    }

    _renderImgList(data){
      data = data.Q.data;
      return (
          <ListView
                  horizontal={true}
                  pageSize={data.count}
                  initialListSize={data.count}
                  dataSource={this.dataSource.cloneWithRows(data)}
                  renderRow={this._renderImgItem}
                />
        )
    }
    _renderImgItem(urlData){
      console.log('img');
      return(
          <Image
            style={[styles.QImg]}
            source={{uri: urlData.url}} />
          
        )
    }

    clickTip(){


    }

    renderMark(data,d,index){

      var thisStyle ;
      if(index ==0)
          thisStyle = [styles.listItem,{marginTop:-10}]
        else
          thisStyle = styles.listItem

    if(data.Q.type === this.state.QTypeData.text){
        return (
            <View style={[thisStyle,{overflow:'hidden'}]}>
                <View style={styles.listItemHead}>
                  <View style={styles.listItemImgRegion}>
                    <Image
                      style={styles.listItemImg}
                      source={{uri: data.user.img}} />
                  </View>
                  <View style={[commStyles.textAlignRegion,{flex:1}]}>
                    <Text style={styles.listItemText}>
                      {data.user.userName}
                    </Text>
                  </View>
                  <View style={[styles.listMoreRegion,commStyles.textAlignRegion]}>
                      <Text style={styles.listMoreRegionText} onPress={()=>this.clickTip()}>···</Text>
                  </View>
                </View>
                <View style={[styles.listItemContent]}>
                  <Text style={styles.QColor}
                        numberOfLines={2}>
                    {data.Q.title}
                  </Text> 
                  <Text style={styles.AColor}
                        numberOfLines={3}>
                    {data.A.content}
                  </Text>
                </View>
                <View style={styles.listItemFoot}>
                  <View style={[styles.listItemFootActionItem,commStyles.textAlignRegion]}>
                    <Text style={styles.listItemFootNumber}>{data.extend.wonderful}</Text>
                    <Text style={styles.listItemFootText}>有用</Text>
                    <Text style={styles.listItemFootSplit}>·</Text>
                  </View>
                 <View style={[styles.listItemFootActionItem,commStyles.textAlignRegion]}>
                    <Text style={styles.listItemFootNumber}>{data.extend.answer}</Text>
                    <Text style={styles.listItemFootText}>回答</Text>
                    <Text style={styles.listItemFootSplit}>·</Text>
                  </View>
                  <View style={[styles.listItemFootActionItem,commStyles.textAlignRegion]}>
                    <Text style={[styles.listItemFootText,{marginLeft:8}]}>{data.extend.isCollection?'取消关注':'关注问题'}</Text>
                  </View>
                </View>
            </View>
          )
      }else{
        console.log('img')
         return (
        <View style={[thisStyle,{overflow:'hidden'}]}>
            <View style={styles.listItemHead}>
              <View style={styles.listItemImgRegion}>
                <Image
                  style={styles.listItemImg}
                  source={{uri: data.user.img}} />
              </View>
              <View style={[commStyles.textAlignRegion,{flex:1}]}>
                <Text style={styles.listItemText}>
                  {data.user.userName}
                </Text>
              </View>
              <View style={[styles.listMoreRegion,commStyles.textAlignRegion]}>
                  <Text style={styles.listMoreRegionText}>···</Text>
              </View>
            </View>
            <View style={[styles.listItemContent]}>
              {this._renderImgItem(data.Q.data[0])}
            </View>
            <View style={styles.listItemFoot}>
              <View style={[styles.listItemFootActionItem,commStyles.textAlignRegion]}>
                <Text style={styles.listItemFootNumber}>{data.extend.wonderful}</Text>
                <Text style={styles.listItemFootText}>有用</Text>
                <Text style={styles.listItemFootSplit}>·</Text>
              </View>
             <View style={[styles.listItemFootActionItem,commStyles.textAlignRegion]}>
                <Text style={styles.listItemFootNumber}>{data.extend.answer}</Text>
                <Text style={styles.listItemFootText}>回答</Text>
                <Text style={styles.listItemFootSplit}>·</Text>
              </View>
              <View style={[styles.listItemFootActionItem,commStyles.textAlignRegion]}>
                <Text style={[styles.listItemFootText,{marginLeft:8}]}>{data.extend.isCollection?'取消关注':'关注问题'}</Text>
              </View>
            </View>
        </View>
      )
      }
    }
}

const styles = StyleSheet.create({
  content:{
    flex:1
  },
  main:{
    backgroundColor:config.color.backgroundColor,
    flexDirection:'column',
    flex:1,
  },
  footRegion:{
    backgroundColor:config.color.backgroundColor,
  },
  listItem:{
    flex:1,
    backgroundColor:'#fff',
    height:150,
    paddingLeft:10,
    paddingRight:10,
    flexDirection:'column',
    marginTop:10
  },
  listItemHead:{
    flexDirection:'row',
    paddingTop:10,
    paddingBottom:5,
  },
  listItemContent:{
    flex:1,
  },
  listItemFoot:{
    flexDirection:'row',
    height:20
  },
  listItemImgRegion:{
    height:20,
    width:20,
    borderRadius:10,
    overflow:'hidden'
  },
  listItemImg:{
    height:20,
    width:20
  },
  listItemText:{
    paddingLeft:10,
    fontSize:12,
    color:config.color.secondColor
  },
  listMoreRegion:{
    width:25,
  },
  listMoreRegionText:{
    color:config.color.secondColor,
    fontWeight:'bold',
    fontSize:15
  },
  listItemFootText:{
    fontSize:12,
    color:config.color.secondColor,
    paddingLeft:2,
  },
  listItemFootNumber:{
    fontSize:10,
    color:config.color.secondColor,
    paddingLeft:3,
  },
  listItemFootSplit:{
    fontSize:10,
    color:config.color.secondColor,
    paddingLeft:5,
  },
  listItemFootActionItem:{
    flexDirection:'row',
  },
  QColor:{
    color:config.color.QColor,
    fontSize:14,
    lineHeight:18,
    fontWeight:'bold',
    marginTop:-5
  },
  AColor:{
    color:config.color.AColor,
    fontSize:13,
    lineHeight:16,
    marginTop:5
  },
  QImg:{
    height:95,
    width:300,
    resizeMode:'contain',
    borderWidth:1,
    borderColor:'#eee',
    borderRightWidth:0,
  }
});
//'cover', 'contain', 'stretch', 'repeat', 'center'
class ListIndex extends Component{
  render(){
    return(
      <NavigatorIOS
        style={{backgroundColor: '#eae7ff',flex:1}}
        initialRoute={{
          title:'list',
          component: List,
        }}
        shadowHidden={true}
        navigationBarHidden={true}
        barTintColor="darkslateblue"
        titleTextColor="rgba(255, 255, 255, 1)"
        tintColor="rgba(255, 255, 255, 1)"
        translucent={true}
      />)  
  }
  
}


export { ListIndex as default };








