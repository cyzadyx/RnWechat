/*
 * @Author: your name
 * @Date: 2021-07-29 16:15:30
 * @LastEditTime: 2021-07-29 18:35:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \RnWeChat\src\pages\find\circle\index.js
 */
import React from 'react'
import { View,StatusBar ,Text} from 'react-native'
import {ImageHeaderScrollView,TriggeringView} from 'react-native-image-header-scroll-view';

import CircleHeader from './circleHeader'
import CircleContent from './circleContent'

export default function Index() {
    let onTouchTop = ()=>{
        console.log('sonTouchTop');
    }
    return (
       <View style={{flex:1}}>
        <ImageHeaderScrollView
                maxHeight={230}
                minHeight={80}
                headerImage={require("../../res/img/8.jpg")}
                renderFixedForeground={() => (
                    <View style={{ height: 80, justifyContent:"flex-start", alignItems: "center" }} >
                        <CircleHeader></CircleHeader>
                    </View>
                )}
               
                >
                    <View>
                        <TriggeringView onHide={() => console.log("text hidden")}  onTouchTop={onTouchTop}>
                            <CircleContent></CircleContent>
                        </TriggeringView> 
                    </View>
            </ImageHeaderScrollView>
            
       </View>
    )
}
