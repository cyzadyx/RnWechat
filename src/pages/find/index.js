/*
 * @Author: your name
 * @Date: 2021-06-18 10:38:28
 * @LastEditTime: 2021-07-16 16:48:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \RnWeChat\src\pages\my\index.js
 */
import React, { Component } from 'react'
import { Text, View,StatusBar } from 'react-native'

import FindHeader from './findHeader'
import FindContent from './findContent'

export default class Index extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <StatusBar backgroundColor="transparent" translucent />

                <FindHeader></FindHeader>

                <FindContent></FindContent>
            </View>
        )
    }
}
