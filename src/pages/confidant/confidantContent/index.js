/*
 * @Author: your name
 * @Date: 2021-06-19 17:37:36
 * @LastEditTime: 2021-07-28 11:36:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \RnWeChat\src\pages\confidant\confidantContent\index.js
 */
import React from 'react'
import { View ,FlatList,Text} from 'react-native'
import { ListItem, Avatar,Badge } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
import chatUserStore from '../../../mobx/chatUserStore'

import Style from './style'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const list = [
    {
        key:1,
        name: '好友1号',
        userId:"186657119781591501526289",
        avatar_url: require("../../../res/img/1.jpg"),
        time:"22:10",
        alarmClose:true,
        noRead:true,
        readNum:10,
        subtitle: '[21条] 时候：100000'
    },
    {
        key:2,
        name: '好友2号',
        avatar_url: require("../../../res/img/2.jpg"),
        time:"20:10",
        alarmClose:true,
        noRead:true,
        readNum:5,
        subtitle: '人民日报'
    },
    {
        key:3,
        name: '好友3号',
        avatar_url: require("../../../res/img/3.jpg"),
        time:"22:10",
        alarmClose:false,
        noRead:false,
        readNum:0,
        subtitle: '人民日报'
    },
    {
        key:4,
        name: '好友4号',
        avatar_url: require("../../../res/img/4.jpg"),
        time:"22:10",
        alarmClose:false,
        noRead:false,
        readNum:0,
        subtitle: '人民日报'
    },
    {
        key:5,
        name: '好友5号',
        avatar_url: require("../../../res/img/7.jpg"),
        time:"22:10",
        alarmClose:false,
        noRead:false,
        readNum:0,
        subtitle: '人民日报'
    },
    {
        key:6,
        name: '好友6号',
        avatar_url: require("../../../res/img/6.jpg"),
        time:"22:10",
        alarmClose:false,
        noRead:false,
        readNum:0,
        subtitle: '人民日报'
    },
    {
        key:7,
        name: '好友7号',
        avatar_url: require("../../../res/img/7.jpg"),
        time:"22:10",
        alarmClose:false,
        noRead:false,
        readNum:0,
        subtitle: '人民日报'
    },
    {
        key:8,
        name: '好友8号',
        avatar_url: require("../../../res/img/8.jpg"),
        time:"22:10",
        alarmClose:false,
        noRead:false,
        readNum:0,
        subtitle: '人民日报'
    },
    {
        key:9,
        name: '好友9号',
        avatar_url: require("../../../res/img/3.jpg"),
        time:"22:10",
        alarmClose:false,
        noRead:false,
        readNum:0,
        subtitle: '人民日报'
    },
    {
        key:10,
        name: '好友10号',
        avatar_url: require("../../../res/img/10.jpg"),
        time:"22:10",
        alarmClose:false,
        noRead:false,
        readNum:0,
        subtitle: '人民日报'
    },
    {
        key:11,
        name: '好友11号',
        avatar_url:require("../../../res/img/4.jpg"),
        time:"22:10",
        alarmClose:false,
        noRead:false,
        readNum:0,
        subtitle: '人民日报'
    },
    {
        key:12,
        name: '好友12号',
        avatar_url: require("../../../res/img/3.jpg"),
        time:"22:10",
        alarmClose:false,
        noRead:false,
        readNum:0,
        subtitle: '人民日报'
    }
]

let Index =(props)=> {
    const navigation = useNavigation();

    let switchChat = (data)=>{
        navigation.push("chatInfo");
        chatUserStore.setChat(data);
        console.log(chatUserStore.user);
    }

    let renderItem = ({item})=>{
        return(
            <ListItem topDivider onPress={()=>switchChat(item)}>
                <View>
                    <Avatar  source={item.avatar_url} size="medium" avatarStyle={Style.listImage} />
                    {
                        item.noRead && <Badge
                        status="error"
                        value={item.readNum}
                        containerStyle={{ position: 'absolute', top: -4, right: -4 }}
                    />
                    }
                </View>
               
                <ListItem.Content>
                    <ListItem.Title style={Style.listTitle}>
                        {item.name}
                    </ListItem.Title>
                    <ListItem.Subtitle style={Style.listContent}>
                        {item.subtitle}
                    </ListItem.Subtitle>
                </ListItem.Content>
                <View>
                    <Text style={{fontSize:12,color:"#999",paddingBottom:10}}>{item.time}</Text>
                    {
                        item.alarmClose &&  <MaterialIcons name="alarm-off" color="#999" size={14}></MaterialIcons>
                    }
                </View>
            </ListItem>
        )
    }

    let keyExtractor = (item, index) => index.toString();

    let _header = function () {
        return (
         <View style={{flex:1,height:35,flexDirection:"row",justifyContent:'center',alignItems:"center"}}>
            <MaterialIcons name="computer" color="#999" size={18}></MaterialIcons>
            <Text style={{fontSize: 12,color:"#999",textAlign:"center",paddingLeft:10}}>
                Windows 知己已登录，手机通知已关闭
            </Text>
         </View>
        );
    }

    let _footer = () => (
        <View style={{paddingTop:10}}>
            <Text style={{fontSize: 14, alignSelf: 'center',color:"#999"}}>
                 到底啦！
            </Text>
        </View>
    )
    return (
        <FlatList
            keyExtractor={keyExtractor}
            data={list}
            renderItem={renderItem}
            ListHeaderComponent={_header}
            ListFooterComponent={_footer}
            ListFooterComponentStyle={{paddingBottom:80}}
        />
        
    )
}

export default Index;