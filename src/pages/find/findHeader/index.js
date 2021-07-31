/*
 * @Author: your name
 * @Date: 2021-06-19 10:46:21
 * @LastEditTime: 2021-07-29 14:58:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \RnWeChat\src\pages\confidant\confidantHeader\index.js
 */
import React from 'react'
import { View } from 'react-native'
import { Header} from 'react-native-elements';
import RightComponent from '../../components/RightComponent'

import Style from './style'

export default function Index() {
    return (
        <View>
            <Header
                centerComponent={{ text:"发现", style: {...Style.centerComponent} }}
                rightComponent={
                    <RightComponent></RightComponent>
                }
            />
        </View>
    )
}
