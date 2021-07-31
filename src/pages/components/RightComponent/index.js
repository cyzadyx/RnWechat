/*
 * @Author: your name
 * @Date: 2021-07-29 14:54:29
 * @LastEditTime: 2021-07-29 14:56:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \RnWeChat\src\pages\components\RightComponent\index.js
 */

import React,{useState} from 'react'
import { View, Text } from 'react-native'
import { Header,SpeedDial,Tooltip} from 'react-native-elements';
import EvilIcons from "react-native-vector-icons/EvilIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { useNavigation } from '@react-navigation/native';

import Style from './style'

export default function Index() {
    const navigation = useNavigation();
    let fnSearch = ()=>{
        navigation.push("search");
    }
    let _toolAdd = ()=>{
        return <View>
            <View style={Style.toolItem}>
                <AntDesign style={{...Style.toolIcon}} name='message1'></AntDesign>
                <Text style={Style.toolText}>发起群聊</Text>
            </View>
            <View style={Style.toolItem}>
                <Ionicons style={{...Style.toolIcon}} name='person-add'></Ionicons>
                <Text style={Style.toolText}>添加朋友</Text>
            </View>
            <View style={Style.toolItem}>
                <AntDesign style={{...Style.toolIcon}} name="scan1" ></AntDesign>
                <Text style={Style.toolText}>扫一扫</Text>
            </View>
            <View style={Style.toolItem}>
                <AntDesign style={{...Style.toolIcon}} name="pay-circle-o1" ></AntDesign>
                <Text style={Style.toolText}>收付款</Text>
            </View>
            <View style={Style.toolItem}>
                <MaterialCommunityIcons style={{...Style.toolIcon}} name='email-outline'></MaterialCommunityIcons>
                <Text style={Style.toolText}>帮助与反馈</Text>
            </View>
        </View>
    }
    return (
        <View style={{...Style.rightComponent}}>
            <EvilIcons style={{...Style.rightComponentIcon}} name='search' onPress={fnSearch}></EvilIcons>
            
            <Tooltip popover={_toolAdd()} containerStyle={{backgroundColor:"#333333",height:300,width:155}} overlayColor="rgba(250, 250, 250, 0)">
                <EvilIcons style={{...Style.rightComponentIcon}} name='plus' ></EvilIcons>
            </Tooltip>
        </View>
    )
}
