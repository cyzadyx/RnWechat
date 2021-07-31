/*
 * @Author: your name
 * @Date: 2021-06-19 17:37:36
 * @LastEditTime: 2021-07-22 17:40:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \RnWeChat\src\pages\confidant\confidantContent\index.js
 */
import React from 'react'
import { View ,FlatList,Text} from 'react-native'
import { ListItem, Avatar,Badge } from 'react-native-elements'

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


import Style from './style'

export default function Index() {
    
    return (
        <View style={{flex:1}}>
            <ListItem style={{marginBottom:10}}>
                <View>
                    <AntDesign name="pay-circle-o1" color="#07cc07" size={22}></AntDesign>
                </View>
                <ListItem.Content>
                    <ListItem.Title style={Style.listTitle}>
                        <Text>支付</Text>
                    </ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron color="#999" size={28} />
            </ListItem>
            <ListItem >
                <View>
                    <Ionicons name="ios-cube-outline" color="#0bc3ec" size={25}></Ionicons>
                </View>
                <ListItem.Content>
                    <ListItem.Title style={Style.listTitle}>
                        <Text>收藏</Text>
                    </ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron color="#999" size={28} />
            </ListItem>
            <ListItem>
                <View>
                    <FontAwesome name="photo" color="#0eefc5" size={22}></FontAwesome>
                </View>
                <ListItem.Content>
                    <ListItem.Title style={Style.listTitle}>
                        <Text>朋友圈</Text>
                    </ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron color="#999" size={28} />
            </ListItem>
            <ListItem>
                <View>
                    <Fontisto name="shopping-package" color="#0cea13" size={22}></Fontisto>
                </View>
                <ListItem.Content>
                    <ListItem.Title style={Style.listTitle}>
                        <Text>卡包</Text>
                    </ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron color="#999" size={28} />
            </ListItem>
            <ListItem style={{marginBottom:10}}>
                <View>
                    <SimpleLineIcons name="emotsmile" color="#ef9f0b" size={22}></SimpleLineIcons>
                </View>
                <ListItem.Content>
                    <ListItem.Title style={Style.listTitle}>
                        <Text>表情</Text>
                    </ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron color="#999" size={28} />
            </ListItem>

            <ListItem >
                <View>
                    <AntDesign name="setting" color="#07b9ef" size={25}></AntDesign>
                </View>
                <ListItem.Content>
                    <ListItem.Title style={Style.listTitle}>
                        <Text>设置</Text>
                    </ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron color="#999" size={28} />
            </ListItem>

            
        </View>
        
    )
}
