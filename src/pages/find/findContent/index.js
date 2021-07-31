/*
 * @Author: your name
 * @Date: 2021-06-19 17:37:36
 * @LastEditTime: 2021-07-29 16:20:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \RnWeChat\src\pages\confidant\confidantContent\index.js
 */
import React from 'react'
import { View ,FlatList,Text} from 'react-native'
import { ListItem, Avatar,Badge } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';

import Style from './style'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';


export default function Index() {
    const navigation = useNavigation();

    let fnCircle = ()=>{
        navigation.push("circle");
    }

    return (
        <View style={{flex:1}}>
            <ListItem style={{marginBottom:10}} onPress={fnCircle}>
                <View>
                    <MaterialCommunityIcons name="google-photos" color="#ec3e0a" size={30}></MaterialCommunityIcons>
                </View>
                <ListItem.Content>
                    <ListItem.Title style={Style.listTitle}>
                        <Text>知己圈</Text>
                    </ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron color="#999" size={28} />
            </ListItem>
        
            <ListItem style={{marginBottom:10}}>
                <View>
                    <Ionicons name="videocam-outline" color="#f3a30e" size={25}></Ionicons>
                </View>
                <ListItem.Content>
                    <ListItem.Title style={Style.listTitle}>
                        <Text>视频号</Text>
                    </ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron color="#999" size={28} />
            </ListItem>

            <ListItem>
                <View>
                    <AntDesign name="scan1" color="#10ecb0" size={25}></AntDesign>
                </View>
                <ListItem.Content>
                    <ListItem.Title style={Style.listTitle}>
                        <Text>扫一扫</Text>
                    </ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron color="#999" size={28} />
            </ListItem>
            <ListItem style={{marginBottom:10}}>
                <View>
                    <AntDesign name="shake" color="#10ecb0" size={25}></AntDesign>
                </View>
                <ListItem.Content>
                    <ListItem.Title style={Style.listTitle}>
                        <Text>摇一摇</Text>
                    </ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron color="#999" size={28} />
            </ListItem>


            <ListItem>
                <View>
                    <FontAwesome5 name="star-of-david" color="#f3a30e" size={25}></FontAwesome5>
                </View>
                <ListItem.Content>
                    <ListItem.Title style={Style.listTitle}>
                        <Text>看一看</Text>
                    </ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron color="#999" size={28} />
            </ListItem>
            <ListItem style={{marginBottom:10}}>
                <View>
                    <AntDesign name="search1" color="#10ecb0" size={25}></AntDesign>
                </View>
                <ListItem.Content>
                    <ListItem.Title style={Style.listTitle}>
                        <Text>搜一搜</Text>
                    </ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron color="#999" size={28} />
            </ListItem>

            <ListItem style={{marginBottom:10}}>
                <View>
                    <Octicons name="broadcast" color="#10ecb0" size={25}></Octicons>
                </View>
                <ListItem.Content>
                    <ListItem.Title style={Style.listTitle}>
                        <Text>直播和附近</Text>
                    </ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron color="#999" size={28} />
            </ListItem>

            <ListItem>
                <View>
                    <FontAwesome5 name="shopping-bag" color="#aeef10" size={25}></FontAwesome5>
                </View>
                <ListItem.Content>
                    <ListItem.Title style={Style.listTitle}>
                        <Text>购物</Text>
                    </ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron color="#999" size={28} />
            </ListItem>
            <ListItem style={{marginBottom:10}}>
                <View>
                    <Ionicons name="game-controller-outline" color="#efbf10" size={25}></Ionicons>
                </View>
                <ListItem.Content>
                    <ListItem.Title style={Style.listTitle}>
                        <Text>游戏</Text>
                    </ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron color="#999" size={28} />
            </ListItem>


            <ListItem>
                <View>
                    <MaterialCommunityIcons name="apple-keyboard-command" color="#10bbef" size={25}></MaterialCommunityIcons>
                </View>
                <ListItem.Content>
                    <ListItem.Title style={Style.listTitle}>
                        <Text>小程序</Text>
                    </ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron color="#999" size={28} />
            </ListItem>
        </View>
        
    )
}
