/*
 * @Author: your name
 * @Date: 2021-06-17 11:49:13
 * @LastEditTime: 2021-07-28 11:28:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \RnWeChat\App.js
 */
import React, { Component } from 'react'
import { View } from 'react-native'
import {Provider} from 'mobx-react'
import AsyncStorage from '@react-native-async-storage/async-storage';

import Routers from './src/routes/routers'
import RootStore from './src/mobx'
import UserStore from "./src/mobx/userStore";
import JMessage from "./src/utils/JMessage";

export default class App extends Component {
  async componentDidMount(){
    const strUserInfo = await AsyncStorage.getItem("userInfo");
    const userInfo = strUserInfo ? JSON.parse(strUserInfo) : {};
    if (userInfo.token) {
       RootStore.setUserInfo(userInfo.mobile, userInfo.token, userInfo.userId);
    }

    JMessage.init();
 }
  render() {
    return (
      <View style={{flex:1}}>
          <Provider RootStore ={RootStore} UserStore={UserStore}>
            <Routers></Routers>
          </Provider>
      </View>
    )
  }
}

