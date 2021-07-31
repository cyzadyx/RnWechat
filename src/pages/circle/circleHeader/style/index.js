/*
 * @Author: your name
 * @Date: 2021-06-19 11:49:08
 * @LastEditTime: 2021-07-29 16:30:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \RnWeChat\src\pages\confidant\confidantHeader\style\index.js
 */
import { StyleSheet } from 'react-native'

import {pxToDp} from '../../../../utils/stylePx'

const styleSheet = StyleSheet.create({
    centerComponent:{
        color: '#fff',
        fontSize:pxToDp(18),
        width:pxToDp(100)
    },
    rightComponent:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    leftComponentIcon:{
        fontSize:pxToDp(32),
        color:"#fff"
    },
    rightComponentIcon:{
        fontSize:pxToDp(25),
        color:"#fff"
    }
})

export default styleSheet;
