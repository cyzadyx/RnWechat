/*
 * @Author: your name
 * @Date: 2021-06-18 10:38:28
 * @LastEditTime: 2021-06-19 18:08:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \RnWeChat\src\pages\my\index.js
 */
import React, { Component } from 'react'
import { Text, View,StatusBar } from 'react-native'

import ConfidantHeader from './confidantHeader'
import ConfidantContent from './confidantContent'


export default class Index extends Component {
    render() {
        return (
            <View>
                <StatusBar backgroundColor="transparent" translucent />

                <ConfidantHeader></ConfidantHeader>
                
                <ConfidantContent></ConfidantContent>
            </View>
        )
    }
}
