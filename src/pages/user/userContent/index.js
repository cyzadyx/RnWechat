/*
 * @Author: your name
 * @Date: 2021-07-29 15:20:28
 * @LastEditTime: 2021-07-29 16:11:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \RnWeChat\src\pages\user\userHeader\index.js
 */
import React from 'react'
import { View ,Text} from 'react-native'
import { ListItem, Avatar } from 'react-native-elements'
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from '@react-navigation/native';

import Style from './style'

export default function Index() {
    const navigation = useNavigation();
    let fnSendMessage = ()=>{
        navigation.push("chatInfo");
    }

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
            </ListItem>
            <ListItem>
                <ListItem.Content>
                    <ListItem.Title style={Style.listTitle1}>
                        <Text>设备备注</Text>
                    </ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron color="#999" size={28} />
            </ListItem>
            <ListItem style={{marginBottom:10}}>
                <ListItem.Content>
                    <ListItem.Title style={Style.listTitle1}>
                        <Text>朋友权限</Text>
                    </ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron color="#999" size={28} />
            </ListItem>

            <ListItem style={{marginBottom:10}}>
                <ListItem.Content>
                    <ListItem.Title style={Style.listTitle1}>
                        <Text>更多信息</Text>
                    </ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron color="#999" size={28} />
            </ListItem>

            <ListItem onPress={fnSendMessage}>
                <ListItem.Content style={{alignItems:"center"}}>
                    <ListItem.Title style={Style.listTitle1}>
                        <AntDesign name='message1' color="#263238" size={23}></AntDesign>
                        <Text style={{color:"#074765",fontSize:20}}>  发消息</Text>
                    </ListItem.Title>
                </ListItem.Content>
            </ListItem>
            <ListItem>
                <ListItem.Content style={{alignItems:"center"}}>
                    <ListItem.Title style={Style.listTitle1}>
                        <AntDesign name='videocamera' color="#263238" size={23}></AntDesign>
                        <Text style={{color:"#074765",fontSize:20}}>  音视频通话</Text>
                    </ListItem.Title>
                </ListItem.Content>
            </ListItem>
        </View>
    )
}