/*
 * @Author: your name
 * @Date: 2021-06-18 10:10:43
 * @LastEditTime: 2021-07-29 16:17:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \RnWeChat\src\routes\routers.js
 */
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MenuBar from './menuBar'
import Chat from './../pages/chat'
import Search from '../pages/search'
import User from '../pages/user'
import Circle from '../pages/circle'


const Stack = createStackNavigator();

export default class Routers extends Component {
    constructor(props){
        super(props);
        this.state={
            initialRouteName:"menuBar"
        }
    }
    render() {
        const {initialRouteName}=this.state;
        return (
            <NavigationContainer>
                <Stack.Navigator headerMode="none" initialRouteName={initialRouteName}>
                    <Stack.Screen name='menuBar' component={MenuBar} />
                    <Stack.Screen name='chatInfo' component={Chat} />
                    <Stack.Screen name='search' component={Search} />
                    <Stack.Screen name='user' component={User} />
                    <Stack.Screen name='circle' component={Circle} />
                </Stack.Navigator>
               
            </NavigationContainer>
        )
    }
}
