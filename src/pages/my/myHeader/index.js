/*
 * @Author: your name
 * @Date: 2021-06-19 10:46:21
 * @LastEditTime: 2021-07-23 14:07:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \RnWeChat\src\pages\confidant\confidantHeader\index.js
 */
import React,{useState} from 'react'
import { View ,FlatList,Text} from 'react-native'
import { ListItem, Avatar,Badge } from 'react-native-elements'

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Style from './style'

export default function Index() {
    return (
        <View style={Style.header}>
            <ListItem style={Style.headerTitle}>
                <View>
                    <Avatar  source={require("../../../res/img/8.jpg")} size="large" avatarStyle={{borderRadius:10}} />
                </View>
            
                <ListItem.Content>
                    <ListItem.Title style={Style.listTitle}>
                        石小青
                    </ListItem.Title>
                    <ListItem.Subtitle style={Style.listContent}>
                        知己号：8880999
                    </ListItem.Subtitle>
                </ListItem.Content>
                <View>
                    <FontAwesome name="qrcode" color="#999" size={14}></FontAwesome>
                </View>
                <ListItem.Chevron color="#999" size={28} />
            </ListItem>
        </View>
    )
}
