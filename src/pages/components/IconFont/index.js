/*
 * @Author: your name
 * @Date: 2021-06-12 14:12:50
 * @LastEditTime: 2021-06-12 14:13:46
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \CyzNative\src\pages\components\IconFont\index.js
 */
import React  from 'react';
import {  Text } from 'react-native';
import IconMap from "../../../res/fonts/icon";
//  <IconFont name="xihuan" />

const Index = (props) => <Text onPress={props.onPress} style={{ fontFamily: "iconfont", ...props.style }} >
  {IconMap[props.name]}
</Text>
export default Index;