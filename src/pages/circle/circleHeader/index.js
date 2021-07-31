/*
 * @Author: your name
 * @Date: 2021-07-29 16:17:46
 * @LastEditTime: 2021-07-29 18:31:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \RnWeChat\src\pages\circle\circleHeader\index.js
 */
import React,{useState} from 'react'
import { View, Text ,StatusBar} from 'react-native'
import { Header} from 'react-native-elements';
import AntDesign from "react-native-vector-icons/AntDesign";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import {ImageHeaderScrollView} from 'react-native-image-header-scroll-view';
import { useNavigation } from '@react-navigation/native';

import Style from './style/index'

export default function Index() {
    const navigation = useNavigation();

    let back = ()=>{
        navigation.goBack(-1);
    }
    return (
        <View>
            <Header
                leftComponent={
                    <View style={{...Style.rightComponent}}>
                        <EvilIcons style={{...Style.leftComponentIcon}} onPress={back} name='chevron-left'></EvilIcons>
                    </View>
                }
                rightComponent={
                    <View style={{...Style.rightComponent}}>
                        <AntDesign style={{...Style.rightComponentIcon}} name='camerao'></AntDesign>
                    </View>
                }
                backgroundColor="transparent"
                containerStyle={{borderBottomWidth:0}}
            />
            
        </View>
    )
}