/*
 * @Author: your name
 * @Date: 2021-06-18 10:38:28
 * @LastEditTime: 2021-07-15 15:47:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \RnWeChat\src\pages\my\index.js
 */
import React, { Component } from 'react'
import { Text, View,StatusBar } from 'react-native'

import AddressListHeader from './addressListHeader'

import AddressListContent from './addressListContent'

export default class Index extends Component {
    render() {
        return (
            <View>
                <StatusBar backgroundColor="transparent" translucent />

                <AddressListHeader></AddressListHeader>

                <AddressListContent></AddressListContent>
            </View>
        )
    }
}
