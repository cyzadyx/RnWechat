/*
 * @Author: your name
 * @Date: 2021-06-19 10:46:21
 * @LastEditTime: 2021-07-28 15:30:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \RnWeChat\src\pages\confidant\confidantHeader\index.js
 */
import React,{useState} from 'react'
import { View, Text } from 'react-native'
import { Header} from 'react-native-elements';
import Feather from "react-native-vector-icons/Feather";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import { useNavigation } from '@react-navigation/native';
import chatUserStore from '../../../mobx/chatUserStore'

import Style from './style'

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
                        <EvilIcons style={{...Style.rightComponentIcon}} onPress={back} name='chevron-left'></EvilIcons>
                    </View>
                }
                centerComponent={
                    <View >
                        <Text style={{...Style.centerComponent}}>{chatUserStore.user.name}</Text>
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
