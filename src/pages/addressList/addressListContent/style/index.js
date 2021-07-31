/*
 * @Author: your name
 * @Date: 2021-06-19 11:49:08
 * @LastEditTime: 2021-07-16 13:51:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \RnWeChat\src\pages\confidant\confidantHeader\style\index.js
 */
import { StyleSheet } from 'react-native'

import {pxToDp} from '../../../../utils/stylePx'

const styleSheet = StyleSheet.create({
    letterStyle:{
        marginVertical:2,
        height:18,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    rightLetter:{
        position:'absolute',
        width:26,
        right:0,
        top:20
    },
    itemSeparator:{
        height: 1, 
        backgroundColor: '#E3E3E3',
        marginHorizontal:10
    },
    renderSectionHeader:{
        height:50,
        backgroundColor:'#ddd',
        paddingHorizontal:20,
        flexDirection:'row',
        alignItems:'center'
    },
    renderItem:{
        backgroundColor:'#fff',
        paddingLeft:20,
        paddingRight:30,
        height:70,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center'
    },
    renderItemText:{
        marginLeft:10,
        flexDirection:'row',
        justifyContent:'space-between',
        flexGrow:1
    },
    listImage:{
        borderRadius:10
    }
})

export default styleSheet;
