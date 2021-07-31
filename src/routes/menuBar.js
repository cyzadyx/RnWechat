/*
 * @Author: your name
 * @Date: 2021-06-18 10:16:06
 * @LastEditTime: 2021-07-28 15:24:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \RnWeChat\src\routes\menuBar.js
 */
import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AddressList from "../pages/addressList";
import Confidant from '../pages/confidant'
import Find from '../pages/find'
import My from '../pages/my'
import JMessage from '../utils/JMessage';

import IconFont from "../pages/components/IconFont";
import userStore from '../mobx/userStore'

const Tab = createBottomTabNavigator();

export default class MenuBar extends Component {
    async componentDidMount() {
        let user = {
            key:1,
            name: 'cyz',
            userId:"cyzTest",
            avatar_url: "https://developmentiot.tech/iots/mpPhotoSrc/1602320047388.jpg",
            time:"22:10",
            alarmClose:true,
            noRead:true,
            readNum:10,
        }
        userStore.setUser(user);

        // 3 进行极光登录
        await JMessage.login("cyzTest","123456");
    }
    render() {
        return (
            <Tab.Navigator
                tabBarOptions={{
                    activeTintColor: '#04BE02',
                    inactiveTintColor: '#333',
                }}
            >
                <Tab.Screen 
                    name="知己" 
                    component={Confidant}
                    options={{
                        tabBarLabel: '知己',
                        title:null,
                        tabBarIcon: ({ focused,color,size }) => (
                            focused?<IconFont name="icon-wechat-fill" style={{fontSize:24,color:color}} />
                            :<IconFont name="icon-wechat" style={{fontSize:24,color:color}} />
                        ),
                    }}
                />
                <Tab.Screen 
                    name="通讯录" 
                    component={AddressList}
                    options={{
                        tabBarLabel: '通讯录',
                        tabBarIcon: ({ focused,color,size }) => (
                            focused?<IconFont name="icon-address-list-fill" style={{fontSize:24,color:color}} />
                            :<IconFont name="icon-address-list" style={{fontSize:24,color:color}} />
                        ),
                    }}
                />
                <Tab.Screen 
                    name="发现"
                    component={Find}
                    options={{ tabBarBadge: 3 }}
                    options={{
                        tabBarLabel: '发现',
                        tabBarIcon: ({ focused,color,size }) => (
                            focused?<IconFont name="icon-find-fill" style={{fontSize:24,color:color}} />
                            :<IconFont name="icon-find" style={{fontSize:24,color:color}} />
                        ),
                    }}
                />
                <Tab.Screen 
                    name="我" 
                    component={My}
                    options={{
                        tabBarLabel: '我',
                        tabBarIcon: ({ focused,color,size }) => (
                            focused?<IconFont name="icon-my-fill" style={{fontSize:24,color:color}} />
                            :<IconFont name="icon-my" style={{fontSize:24,color:color}} />
                        ),
                    }}
                />
          </Tab.Navigator>
        )
    }
}
