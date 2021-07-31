/*
 * @Author: your name
 * @Date: 2021-06-18 10:38:28
 * @LastEditTime: 2021-07-22 15:25:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \RnWeChat\src\pages\my\index.js
 */
import React, { Component } from 'react'
import { Text, View,StatusBar } from 'react-native'

import MyHeader from './myHeader'
import MyContent from './myContent'

export default class Index extends Component {
    render() {
        return (
            <View  style={{flex:1}}>
                <StatusBar backgroundColor="transparent" translucent />

                <MyHeader></MyHeader>

                <MyContent></MyContent>
            </View>
        )
    }
}
