/*
 * @Author: your name
 * @Date: 2021-07-15 15:46:55
 * @LastEditTime: 2021-07-29 15:16:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \RnWeChat\src\pages\addressList\addressListContent\index.js
 */
import React,{useState,useEffect,useRef}from 'react'
import { View, Text,FlatList,TouchableOpacity,SectionList} from 'react-native'
import pinyin from 'pinyin';
import { Avatar } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';

import Style from './style'

export default function Index() {
    const navigation = useNavigation();
    const [letter, setLetter] = useState(['*','a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'])
    const [testData, setTestData] = useState([
      {name: '盖伦', avatar_url: require("../../../res/img/8.jpg")},
      {name: '崔丝塔娜', avatar_url: require("../../../res/img/7.jpg")},
      {name: "大发明家", avatar_url: require("../../../res/img/10.jpg")},
      {name: '武器大师', avatar_url: require("../../../res/img/5.jpg")},
      {name: "武器大师", avatar_url: require("../../../res/img/5.jpg")},
      {name: '刀妹', avatar_url: require("../../../res/img/6.jpg")},
      {name: "卡特琳娜", avatar_url: require("../../../res/img/5.jpg")},
      {name: '盲僧', avatar_url: require("../../../res/img/4.jpg")},
      {name: "蕾欧娜", avatar_url: require("../../../res/img/10.jpg")},
      {name: "拉克丝", avatar_url: require("../../../res/img/8.jpg")},
      {name: "剑圣", avatar_url: require("../../../res/img/3.jpg")},
      {name: "赏金", avatar_url: require("../../../res/img/2.jpg")},
      {name: "发条", avatar_url: require("../../../res/img/8.jpg")},
      {name: "瑞雯", avatar_url: require("../../../res/img/7.jpg")},
      {name: "提莫", avatar_url: require("../../../res/img/6.jpg")},
      {name: "卡牌", avatar_url: require("../../../res/img/1.jpg")},
      {name: "剑豪", avatar_url: require("../../../res/img/8.jpg")},
      {name: "琴女", avatar_url: require("../../../res/img/1.jpg")},
      {name: "木木", avatar_url: require("../../../res/img/10.jpg")},
      {name: "雪人", avatar_url: require("../../../res/img/1.jpg")},
      {name: "安妮", avatar_url: require("../../../res/img/7.jpg")},
      {name: "薇恩", avatar_url: require("../../../res/img/3.jpg")},
      {name: "小法师", avatar_url: require("../../../res/img/4.jpg")},
      {name: "艾尼维亚", avatar_url: require("../../../res/img/1.jpg")},
      {name: "奥瑞利安索尔", avatar_url: require("../../../res/img/6.jpg")},
      {name: "布兰德", avatar_url: require("../../../res/img/8.jpg")},
      {name: "凯特琳", avatar_url: require("../../../res/img/6.jpg")},
      {name: "虚空", avatar_url: require("../../../res/img/1.jpg")},
      {name: "机器人", avatar_url: require("../../../res/img/1.jpg")},
      {name: "挖掘机", avatar_url: require("../../../res/img/7.jpg")},
      {name: "EZ", avatar_url: require("../../../res/img/1.jpg")},
      {name: "暴走萝莉", avatar_url: require("../../../res/img/10.jpg")},
      {name: "艾克", avatar_url: require("../../../res/img/3.jpg")},
      {name: "波比", avatar_url: require("../../../res/img/2.jpg")},
      {name: "赵信", avatar_url: require("../../../res/img/3.jpg")},
      {name: "牛头", avatar_url: require("../../../res/img/4.jpg")},
      {name: "九尾", avatar_url: require("../../../res/img/5.jpg")},
      {name: "菲兹", avatar_url: require("../../../res/img/6.jpg")},
      {name: "寒冰", avatar_url: require("../../../res/img/7.jpg")},
      {name: "猴子", avatar_url: require("../../../res/img/8.jpg")},
      {name: "深渊", avatar_url: require("../../../res/img/10.jpg")},
      {name: "凯南", avatar_url: require("../../../res/img/1.jpg")},
      {name: "诺克萨斯", avatar_url: require("../../../res/img/2.jpg")},
      {name: "祖安", avatar_url: require("../../../res/img/3.jpg")},
      {name: "德莱文", avatar_url: require("../../../res/img/4.jpg")},
      {name: "德玛西亚王子", avatar_url: require("../../../res/img/5.jpg")},
      {name: "豹女", avatar_url: require("../../../res/img/6.jpg")},
      {name: "皮城执法官", avatar_url: require("../../../res/img/7.jpg")},
      {name: "泽拉斯", avatar_url: require("../../../res/img/8.jpg")},
      {name: "岩雀", avatar_url: require("../../../res/img/10.jpg")},
    ]);
    const [sections, setSections] = useState([]);
    const _sectionRef = useRef()
    
    useEffect(() => {
      initData();
    }, []);

    let initData = ()=>{
        //获取联系人列表
        let list = testData;
        let sections = [{
          title: '*',
          data: [
            {name: "新的朋友", avatar_url: require("../../../res/img/8.jpg"),tag:1},
            {name: "仅聊天的朋友", avatar_url: require("../../../res/img/8.jpg"),tag:1},
            {name: "群聊", avatar_url: require("../../../res/img/8.jpg"),tag:1},
            {name: "标签", avatar_url: require("../../../res/img/8.jpg"),tag:1},
            {name: "公众号", avatar_url: require("../../../res/img/8.jpg"),tag:1}
          ]
        }],
        letterArr = [];

        // 右侧字母栏数据处理
        list.map((item, index) => {

          letterArr.push(pinyin(item.name.substring(0, 1), {
            style: pinyin.STYLE_FIRST_LETTER,
          })[0][0].toUpperCase());

          letterArr = [...new Set(letterArr)].sort();

          setLetter(['*',...letterArr]);
        });

        // 分组数据处理
        letterArr.map((item, index) => {
          sections.push({
            title: item,
            data: []
          })
        });

        list.map(item => {
          let listItem = item;
          sections.map(item => {
            let first = listItem.name.substring(0, 1);
            let test = pinyin(first, {style: pinyin.STYLE_FIRST_LETTER})[0][0].toUpperCase();

            if (item.title == test) {
              item.data.push({name: listItem.name, avatar_url: listItem.avatar_url,tag:listItem.tag});
            }
          })
        });

        setSections(sections);
    }

    let  _renderSectionHeader = (sectionItem)=>{
        const {section} = sectionItem;
        return(
           
              section.title !="*" && 
              <View style={Style.renderSectionHeader}>
                  <Text style={{fontSize: 16}}>{section.title.toUpperCase()}</Text>
              </View>
        );
    }

    let _renderTag = (index)=>{
      if(index ===0){
        return  <View style={{backgroundColor:"#b9811a",borderRadius:10}}>
            <MaterialCommunityIcons name="account-plus" color="#fff" size={25} style={{padding:12}}></MaterialCommunityIcons>
        </View>
      }else if(index ===1){
        return  <View style={{backgroundColor:"#9706c7",borderRadius:10}}>
            <FontAwesome name="address-book" color="#fff" size={25} style={{padding:12}}></FontAwesome>
        </View>
      }else if(index ===2){
        return  <View style={{backgroundColor:"#0dd06d",borderRadius:10}}>
            <FontAwesome5 name="users" color="#fff" size={20} style={{padding:12}}></FontAwesome5>
        </View>
      }else if(index ===3){
        return  <View style={{backgroundColor:"#097ee2",borderRadius:10}}>
            <AntDesign name="tag" color="#fff" size={25} style={{padding:12}}></AntDesign>
        </View>
      }else if(index ===4){
        return  <View style={{backgroundColor:"#36c706",borderRadius:10}}>
            <Fontisto name="user-secret" color="#fff" size={25} style={{padding:12}}></Fontisto>
        </View>
      }
    }

    let  _renderItem = (item, index)=>{
        return(
          <TouchableOpacity style={Style.renderItem} onPress={()=>fnUserInfo(item)}>
              <View>
                  {
                    item.tag  && _renderTag(index)
                   
                  }
                  {
                    !item.tag && <Avatar  source={item.avatar_url} size="medium" avatarStyle={Style.listImage} />
                  }
                  
              </View>
              <View style={Style.renderItemText}>
                <Text >{item.name}</Text>
              </View>
          </TouchableOpacity>
        );
    }

    let _onSectionSelect = (key) => {
      _sectionRef.current.scrollToLocation({
        itemIndex: 0,
        sectionIndex: key,
        viewOffset: 0,
      })
  
    };

    let fnUserInfo = (item)=>{
      navigation.push("user");
      console.log(item);
    }

    return (
        <View>
            <SectionList
                ref={_sectionRef}
                renderSectionHeader={_renderSectionHeader}
                ItemSeparatorComponent={() => <View style={Style.itemSeparator}/>}
                sections={sections}
                keyExtractor={(item, index) => index}
                numColumns={1}
                renderItem={({item, index}) => _renderItem(item, index)}
            />

            <View  style={Style.rightLetter} >
              <FlatList
                data={letter}
                keyExtractor={(item, index) => index.toString()}      
                renderItem={({item, index}) =>
                  <TouchableOpacity
                    style={Style.letterStyle}
                    onPress={() => {
                      _onSectionSelect(index)
                    }}
                  >
                    <Text style={{fontSize:12}}>{item.toUpperCase()}</Text>
                  </TouchableOpacity>
                }
              />
            </View>
        </View>
    )
}
