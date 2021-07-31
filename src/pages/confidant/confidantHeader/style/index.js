/*
 * @Author: your name
 * @Date: 2021-06-19 11:49:08
 * @LastEditTime: 2021-07-29 14:52:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \RnWeChat\src\pages\confidant\confidantHeader\style\index.js
 */
import { StyleSheet } from 'react-native'

import {pxToDp} from '../../../../utils/stylePx'

const styleSheet = StyleSheet.create({
    leftComponent:{
        color: '#fff',
        fontSize:pxToDp(18),
        width:pxToDp(100)
    },
    rightComponent:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-between"
    },
    rightComponentIcon:{
        fontSize:pxToDp(32),
        color:"#fff"
    },
    toolItem:{
        // paddingLeft:20,
        // paddingRight:20,
        flexDirection:"row",
        paddingBottom:15,
        paddingTop:15,
        paddingLeft:15,
        paddingRight:15
    },
    toolIcon:{
        fontSize:pxToDp(25),
        color:"#fff",
        marginRight:20
    },
    toolText:{
        color:"#ffffff",
        fontSize:20
        // borderBottomWidth:1,
        // borderBottomColor:"#999999",
        // paddingBottom:20
    }
})

export default styleSheet;
