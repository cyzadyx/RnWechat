/*
 * @Author: your name
 * @Date: 2021-07-29 16:17:52
 * @LastEditTime: 2021-07-29 18:18:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \RnWeChat\src\pages\circle\circleContent\index.js
 */

import React from 'react'
import { View,FlatList, Text } from 'react-native'
import { ListItem, Avatar,Image } from 'react-native-elements'
import Feather from "react-native-vector-icons/Feather";

import Style from './style'

let list = [
    {
        key:1,
        name: '好友1号',
        avatar_url: require("../../../res/img/2.jpg"),
        time:"20:10",
        message: '少常乃超参数传你哈爱吃那，academic【奶茶，阿萨从那吃啥呢',
        imgList:[
            require("../../../res/img/1.jpg"),
            require("../../../res/img/8.jpg"),
            require("../../../res/img/4.jpg"),
            require("../../../res/img/2.jpg")
        ]
    },
    {
        key:2,
        name: '好友2号',
        avatar_url: require("../../../res/img/1.jpg"),
        time:"22:10",
        message: '少常乃超参数传你哈爱吃那，academic【奶茶，阿萨从那吃啥呢',
        imgList:[
            require("../../../res/img/2.jpg"),
            require("../../../res/img/3.jpg"),
            require("../../../res/img/4.jpg"),
            require("../../../res/img/1.jpg")
        ]
    }, {
        key:3,
        name: '好友3号',
        avatar_url: require("../../../res/img/3.jpg"),
        time:"22:10",
        message: '少常乃超参数传你哈爱吃那，academic【奶茶，阿萨从那吃啥呢',
        imgList:[
            require("../../../res/img/5.jpg"),
            require("../../../res/img/6.jpg"),
            require("../../../res/img/7.jpg"),
            require("../../../res/img/8.jpg")
        ]
    },{
        key:4,
        name: '好友4号',
        avatar_url: require("../../../res/img/4.jpg"),
        time:"22:10",
        message: '少常乃超参数传你哈爱吃那，academic【奶茶，阿萨从那吃啥呢',
        imgList:[
            require("../../../res/img/4.jpg"),
            require("../../../res/img/10.jpg"),
            require("../../../res/img/1.jpg"),
            require("../../../res/img/3.jpg")
        ]
    },{
        key:5,
        name: '好友5号',
        avatar_url: require("../../../res/img/5.jpg"),
        time:"22:10",
        message: '少常乃超参数传你哈爱吃那，academic【奶茶，阿萨从那吃啥呢',
        imgList:[
            require("../../../res/img/1.jpg"),
            require("../../../res/img/8.jpg"),
            require("../../../res/img/6.jpg"),
            require("../../../res/img/7.jpg")
        ]
    },
]

export default function Index() {

    let _renderItem = (item)=>{
        return(
            <ListItem style={Style.headerTitle} key={item.key}>
                <View style={{alignSelf:"flex-start"}}>
                    <Avatar  source={item.avatar_url} size="medium" avatarStyle={{borderRadius:10}} />
                </View>
            
                <ListItem.Content>
                    <ListItem.Title style={Style.listTitle}>
                        {item.name}
                    </ListItem.Title>
                    <View>
                        <Text style={{fontSize:18,color:"black"}}>{item.message}</Text>
                    </View>
                    <View style={{flexDirection:'row',flexWrap:"wrap"}}>
                        {
                            item.imgList.map((val,ind)=>{
                                return(
                                    <Image
                                    source={val}
                                    key={ind}
                                    style={{ width: 100, height: 100,marginRight:5,marginTop:5 }}
                                    />
                                )
                            })
                        }
                       
                    </View>
                    <View style={{flexDirection:"row",marginTop:20,width:"100%"}}>
                        <View style={{flex:3}}><Text style={{color:"#999"}}>{item.time}</Text></View>
                        <View style={{flex:1}}><Feather name='more-horizontal' color="#999" size={18}></Feather></View>
                    </View>
                </ListItem.Content>
                
            </ListItem>
        )
    }

    let keyExtractor = (item, index) => index.toString();

    let _footer = () => (
        <View style={{paddingTop:10}}>
            <Text style={{fontSize: 14, alignSelf: 'center',color:"#999"}}>
                 到底啦！
            </Text>
        </View>
    )

    return (
        <View style={Style.header}>
            {
                list.map((val)=>{
                    return(
                        _renderItem(val)
                    )
                })
            }
        </View>
    )
}

// <FlatList
//                     keyExtractor={keyExtractor}
//                     data={list}
//                     renderItem={_renderItem}
//                     ListFooterComponent={_footer}
//                     ListFooterComponentStyle={{paddingBottom:80}}
//                 />