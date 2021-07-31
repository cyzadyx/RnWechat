/*
 * @Author: your name
 * @Date: 2021-07-27 16:47:15
 * @LastEditTime: 2021-07-29 09:35:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \RnWeChat\src\pages\chat\style\index.js
 */
import { StyleSheet,Dimensions } from 'react-native'
const window = Dimensions.get('window')

const styleSheet = StyleSheet.create({
    sendCustomBtn: {
  
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    inputView: {
      backgroundColor: 'green',
      width: window.width,
      height: 100,
    },
    btnStyle: {
      marginTop: 10,
      borderWidth: 1,
      borderColor: '#3e83d7',
      borderRadius: 8,
      backgroundColor: '#3e83d7'
    },
    navigationBar:{
        
    }
  });

  export default styleSheet;


  