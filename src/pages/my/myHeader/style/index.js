/*
 * @Author: your name
 * @Date: 2021-06-19 11:49:08
 * @LastEditTime: 2021-07-29 18:37:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \RnWeChat\src\pages\confidant\confidantHeader\style\index.js
 */
import { StyleSheet } from 'react-native'

import {pxToDp} from '../../../../utils/stylePx'

const styleSheet = StyleSheet.create({
   header:{
       paddingBottom:30,
       backgroundColor:"#fff",
       marginBottom:10,
       marginTop:50
   },
   headerTitle:{
       paddingTop:10
   },
   listTitle:{
       fontSize:25,
       marginBottom:5
   },
   listContent:{
        color:"#999",
        fontSize:13
   }
})

export default styleSheet;
