/*
 * @Author: your name
 * @Date: 2021-07-23 16:52:42
 * @LastEditTime: 2021-07-29 13:53:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \RnWeChat\src\pages\search\index.js
 */
import React,{useState} from 'react'
import { View, Text,StatusBar } from 'react-native'
import { SearchBar,Avatar ,Button} from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

import Style from './style'

export default function Index() {
    const navigation = useNavigation();
    const [searchText, setSearchText] = useState("");

    let updateSearch = (search)=>{
        setSearchText(search)
    }
    let fnGoBack = ()=>{
        navigation.goBack(-1);
    }
    return (
        <View style={{flex:1,backgroundColor:"#e8e8e8"}}>
                <StatusBar backgroundColor="#e8e8e8" />
                <View style={{flexDirection:"row"}}>
                    
                    <View  style={{marginTop:10,flex:5}}>
                        <SearchBar
                        placeholder="搜索"
                        onChangeText={updateSearch}
                        value={searchText}
                        containerStyle={Style.searchContainer}
                        inputContainerStyle={Style.searchInput}
                        cancelIcon={<Text>取消</Text>}
                    />
                    </View>
                    <View  style={{marginTop:40,marginRight:10}}>
                        <Button
                        title="取消"
                        type="clear"
                        titleStyle={{fontSize:18}}
                        onPress={fnGoBack}
                        />
                    </View>
                    
                </View>

                <View style={{justifyContent:"center",flexDirection:"row",marginTop:20}}>
                    <Text style={{color:"#666666",fontSize:15}}>搜索指定内容</Text>
                </View>

                <View style={{flexDirection:"row",justifyContent:"space-between",paddingLeft:40,paddingRight:40,paddingBottom:20,paddingTop:30}}>
                    <View><Text style={{fontSize:18,color:"#207190"}}>知己圈</Text></View>
                    <View><Text style={{color:"#666666"}}>|</Text></View>
                    <View><Text style={{fontSize:18,color:"#207190"}}>文章</Text></View>
                    <View><Text style={{color:"#666666"}}>|</Text></View>
                    <View><Text style={{fontSize:18,color:"#207190"}}>公众号</Text></View>
                </View>

                <View style={{flexDirection:"row",justifyContent:"space-between",paddingLeft:40,paddingRight:40,paddingBottom:20,paddingTop:30}}>
                    <View><Text style={{fontSize:18,color:"#207190"}}>小程序</Text></View>
                    <View><Text style={{color:"#666666"}}>|</Text></View>
                    <View><Text style={{fontSize:18,color:"#207190"}}>音乐</Text></View>
                    <View><Text style={{color:"#666666"}}>|</Text></View>
                    <View><Text style={{fontSize:18,color:"#207190"}}>&nbsp;&nbsp;表情&nbsp;&nbsp;</Text></View>
                </View>
                
                <View style={{flexDirection:"row",justifyContent:"space-between",paddingLeft:40,paddingRight:40,paddingBottom:20,paddingTop:30}} >
                    <Text style={{fontSize:18,color:"#207190"}}>服务</Text>
                </View>

                <View style={{marginTop:20,alignItems:"center"}}>
                    <Avatar
                        size="large"
                        icon={{name: 'keyboard-voice', color: 'grey', type: 'MaterialIcons'}}
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.7}
                        overlayContainerStyle={{backgroundColor: 'white',borderRadius:50}}
                    />
                    <View><Text style={{color:"#666666",fontSize:15,marginTop:10}}>按住说话</Text></View>
                </View>
        </View>
    )
}
