/*
 * @Author: your name
 * @Date: 2021-07-26 10:42:24
 * @LastEditTime: 2021-07-27 17:21:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \RnWeChat\src\pages\chat\index.js
 */
import React from 'react'
import { Text, View,StatusBar,StyleSheet } from 'react-native'

import Demo from './demo'
import CharInfo from './chatContent/charInfo'
import ChatHeader from './chatHeader'



export default function Index() {
    return (
        <View style={{flex:1}}>
            <StatusBar backgroundColor="transparent" translucent />

            <ChatHeader></ChatHeader>

            <CharInfo></CharInfo>
        </View>
    )
}