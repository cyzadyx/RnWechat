/*
 * @Author: your name
 * @Date: 2021-07-29 15:20:28
 * @LastEditTime: 2021-07-29 15:52:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \RnWeChat\src\pages\user\userHeader\index.js
 */
import React,{useState} from 'react'
import { View, Text } from 'react-native'
import { Header} from 'react-native-elements';
import Feather from "react-native-vector-icons/Feather";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import { useNavigation } from '@react-navigation/native';

import Style from './style/index'

export default function Index() {
    const navigation = useNavigation();

    let back = ()=>{
        navigation.goBack(-1);
    }
    return (
        <View >
            <Header
                leftComponent={
                    <View style={{...Style.rightComponent}}>
                        <EvilIcons style={{...Style.rightComponentIcon}} onPress={back} name='chevron-left'></EvilIcons>
                    </View>
                }
                rightComponent={
                    <View style={{...Style.rightComponent}}>
                        <Feather style={{...Style.rightComponentIcon}} name='more-horizontal'></Feather>
                    </View>
                }
            />
        </View>
    )
}