/*
 * @Author: your name
 * @Date: 2021-07-29 15:13:49
 * @LastEditTime: 2021-07-29 15:52:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \RnWeChat\src\pages\user\index.js
 */
import React from 'react'
import { View,StatusBar ,Text} from 'react-native'

import UserHeader from './userHeader'
import UserContent from './userContent'

export default function Index() {
    return (
        <View >
            <StatusBar backgroundColor="transparent" translucent />
            
            <UserHeader></UserHeader>

            <UserContent></UserContent>
            
        </View>
    )
}
