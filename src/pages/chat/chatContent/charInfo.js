/*
 * @Author: your name
 * @Date: 2021-07-27 16:45:11
 * @LastEditTime: 2021-07-29 10:29:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \RnWeChat\src\pages\chat\charInfo.js
 */
import styles from '../style'
import React, { useEffect ,useState,useRef} from 'react'
import {StyleSheet,View,Alert,Dimensions,Button,Platform,Text} from 'react-native'
import IMUI from 'aurora-imui-react-native'

import chatUserStore from '../../../mobx/chatUserStore'
import userStore from '../../../mobx/userStore'

import JMessage from '../../../utils/JMessage';
import normalMessage from '../../components/JMessage/normalMessage'

var RNFS = require('react-native-fs')
var InputView = IMUI.ChatInput
var MessageListView = IMUI.MessageList
const AuroraIController = IMUI.AuroraIMUIController
const window = Dimensions.get('window')


export default function CharInfo() {
    let initHeight;
    if (Platform.OS === "ios") {
      initHeight = 46
    } else {
      initHeight = 100
    }
    
    const [messageListLayout, setMessageListLayout] = useState({ flex: 1, width: window.width, margin: 0 });
    const [inputViewLayout, setInputViewLayout] = useState({ width: window.width, height: initHeight})
    const [navigationBar, setNavigationBar] = useState({});
    const [inputLayoutHeight, setInputLayoutHeight] = useState()

    const navigatorViewRef = useRef();
    const messageListRef = useRef();
    const chatInputRef = useRef();

    useEffect(() => {
      getChatHistory();

      if (Platform.OS === "android") {
        chatInputRef.current.setMenuContainerHeight(316)
      }
      resetMenu()
      AuroraIController.addMessageListDidLoadListener(getChatHistory);

      return ()=>{
        AuroraIController.removeMessageListDidLoadListener(getChatHistory);
      }
    }, []);


    let  resetMenu = ()=> {
      if (Platform.OS === "android") {
        chatInputRef.current.showMenu(false);
        setMessageListLayout({ flex: 1, width: window.width, margin: 0 });
        setNavigationBar( { height: 64, justifyContent: 'center' });
       
        // this.forceUpdate();
      } else {
        AuroraIController.hidenFeatureView(true)
      }
    }

    let getChatHistory = async()=>{
      const username = chatUserStore.user.userId;
      const from = 0;
      const limit = 1000;
      const history = await JMessage.getHistoryMessages(username, from, limit);

      const messages = []
      history.forEach(v => {
        const message = normalMessage();
        if (v.from.username === userStore.user.userId) {
          message.isOutgoing = true;
          message.fromUser.avatarPath = userStore.user.avatar_url;
        } else {
          message.isOutgoing = false;
          message.fromUser.avatarPath = "https://img.jiguang.cn/main-portal/assets/img/new-logo.svg";
        }

        // 当前的消息类似 图片 还是 文本
        if(v.type==="text"){
          message.msgType = 'text';
          message.text = v.text;
        }else if(v.type==="image"){
          message.msgType="image";
          message.mediaPath=v.thumbPath;
        }
        message.timeString = (new Date(v.createTime)).toLocaleTimeString();
        message.contentSize = { 'height': 100, 'width': 200 };
        messages.push(message)

      })

      AuroraIController.appendMessages(messages)
      AuroraIController.scrollToBottom(true)
    }

    // 发送文本消息 
    let onSendText = async (text) => {
      const message = normalMessage()
      message.msgType = 'text'
      message.text = text
      message.fromUser.avatarPath =  userStore.user.avatar_url;;
      AuroraIController.appendMessages([message]);

      const username = chatUserStore.user.userId;
      // 额外的数据
      const extras={user:JSON.stringify(userStore.user)};
      const res=await JMessage.sendTextMessage(username,text,extras);
    }

    // 发送图片消息
    let onSendGalleryFiles = (mediaFiles) => {

      mediaFiles.forEach(async v => {
        // 创建一个消息对象
        const message = normalMessage()
        // 判断当前文件的类型
        if (v.mediaType == "image") {
          message.msgType = "image"
        } 
        message.mediaPath = v.mediaPath;
        // 设置消息的状态 -> 发送中 
        message.status = "send_going"
        AuroraIController.appendMessages([message])
        AuroraIController.scrollToBottom(true);

        // 调用极光的发送图片的 代码来发送 
        const username=chatUserStore.user.userId;
        const path=v.mediaPath;
        const extras={user:JSON.stringify(userStore.user)};
        const res=await JMessage.sendImageMessage(username,path,extras);
        console.log("===============");
        console.log(res);
        console.log("===============");

        // 修改消息的状态 - 发送中 修改 -> 发送完毕
        AuroraIController.updateMessage({...message,status:"send_succeed"});
      })

      resetMenu()
    }

    let onSwitchToMode = () => {
      AuroraIController.scrollToBottom(true)
    }
    
    let switchCameraMode = (isRecordVideoMode) => {
     console.log("Switching camera mode: isRecordVideoMode: " + isRecordVideoMode)
     // If record video mode, then set to full screen.
     if (isRecordVideoMode) {
       this.setState({
         messageListLayout: { flex: 0, width: 0, height: 0 },
         inputViewLayout: { flex: 1, width: window.width, height: window.height },
         navigationBar: { height: 0 }
       })
     }
   }

   //拍照发送
   let  onTakePicture = (media) => {
      console.log("media " + JSON.stringify(media))
      var message = normalMessage()
      message.msgType = 'image'
      message.mediaPath = media.mediaPath
      AuroraIController.appendMessages([message])
      resetMenu()
      AuroraIController.scrollToBottom(true)
    }

    let onTouchEditText = () => {
      chatInputRef.current.showMenu(false);
    }
    
    let onFullScreen = () => {
      console.log("on full screen");
      setMessageListLayout({ flex: 0, width: 0, height: 0 });
      setInputViewLayout({ flex: 1, width: window.width, height: window.height });
      setNavigationBar({ height: 0 });
      
    }

    let onInputViewSizeChange = (size) => {
      console.log("onInputViewSizeChange height: " + size.height + " width: " + size.width)
      if (inputLayoutHeight != size.height) {
        setMessageListLayout( { flex: 1, width: window.width, margin: 0 });
        setInputViewLayout( { width: window.width, height: size.height });
        setInputLayoutHeight(size.height);
       
      }
    }

    let onCloseCamera = () => {
      console.log("On close camera event");

      setMessageListLayout( { flex: 1, width: window.width, margin: 0 });
      setInputViewLayout({ flex: 0, width: window.width, height: 100 });
      setInputLayoutHeight(100);
      setNavigationBar({ height: 64, justifyContent: 'center' });
    
    }


    let onAvatarClick = (message) => {
      Alert.alert()
      AuroraIController.removeMessage(message.msgId)
    }
  
    let onMsgClick = (message) =>{
      console.log(message)
      Alert.alert("message", JSON.stringify(message))
    }
  
    let onMsgLongClick = (message) => {
      Alert.alert('message bubble on long press', 'message bubble on long press')
    }
  
    let onStatusViewClick = (message) => {
      message.status = 'send_succeed'
      AuroraIController.updateMessage(message)
    }
  
    let onBeginDragMessageList = () => {
      resetMenu()
      AuroraIController.hidenFeatureView(true)
    }
  
    let onTouchMsgList = () => {
      AuroraIController.hidenFeatureView(true)
    }
  
    let onPullToRefresh = () => {
      console.log("on pull to refresh")
      var messages = []
      for (var i = 0; i < 14; i++) {
        var message = normalMessage()
        // if (index%2 == 0) {
        message.msgType = "text"
        message.text = "" + i
        // }
  
        if (i % 3 == 0) {
          message.msgType = "video"
          message.text = "" + i
          message.mediaPath = "/storage/emulated/0/ScreenRecorder/screenrecorder.20180323101705.mp4"
          message.duration = 12
        }
        messages.push(message)
      }
      AuroraIController.insertMessagesToTop(messages)
      if (Platform.OS === 'android') {
        messageListRef.current.refreshComplete()
      }
  
    }

    let onStartRecordVoice = (e) => {
      console.log("on start record voice")
    }
  
    let onFinishRecordVoice = (mediaPath, duration) => {
      var message = constructNormalMessage()
      message.msgType = "voice"
      message.mediaPath = mediaPath
      message.timeString = "safsdfa"
      message.duration = duration
      AuroraIController.appendMessages([message])
      console.log("on finish record voice")
    }
  
    let onCancelRecordVoice = () => {
      console.log("on cancel record voice")
    }
  
    let onStartRecordVideo = () => {
      console.log("on start record video")
    }
  
    let onFinishRecordVideo = (video) => {
      var message = normalMessage()
  
      message.msgType = "video"
      message.mediaPath = video.mediaPath
      message.duration = video.duration
      AuroraIController.appendMessages([message])
    }

    return (
        <View style={styles.container}>
          
            <MessageListView style={messageListLayout}
            ref={messageListRef}
            isAllowPullToRefresh={true}
            onAvatarClick={onAvatarClick}
            onMsgClick={onMsgClick}
            onStatusViewClick={onStatusViewClick}
            onTouchMsgList={onTouchMsgList}
            // onTapMessageCell={onTapMessageCell}
            onBeginDragMessageList={onBeginDragMessageList}
            onPullToRefresh={onPullToRefresh}
            avatarSize={{ width: 50, height: 50 }}
            avatarCornerRadius={25}
            messageListBackgroundColor={"#f3f3f3"}
            sendBubbleTextSize={18}
            sendBubbleTextColor={"#000000"}
            sendBubblePadding={{ left: 10, top: 10, right: 15, bottom: 10 }}
            datePadding={{ left: 5, top: 5, right: 5, bottom: 5 }}
            dateBackgroundColor={"#F3F3F3"}
            photoMessageRadius={5}
            maxBubbleWidth={0.7}
            videoDurationTextColor={"#ffffff"}
            dateTextColor="#999999"
            />
            <InputView style={inputViewLayout}
            ref={chatInputRef}
            onSendText={onSendText}
            onTakePicture={onTakePicture}
            onStartRecordVoice={onStartRecordVoice}
            onFinishRecordVoice={onFinishRecordVoice}
            onCancelRecordVoice={onCancelRecordVoice}
            onStartRecordVideo={onStartRecordVideo}
            onFinishRecordVideo={onFinishRecordVideo}
            onSendGalleryFiles={onSendGalleryFiles}
            onSwitchToEmojiMode={onSwitchToMode}
            onSwitchToMicrophoneMode={onSwitchToMode}
            onSwitchToGalleryMode={onSwitchToMode}
            onSwitchToCameraMode={onSwitchToMode}
            // onShowKeyboard={this.onShowKeyboard}
            onTouchEditText={onTouchEditText}
            onFullScreen={onFullScreen}
            // onRecoverScreen={this.onRecoverScreen}
            onSizeChange={onInputViewSizeChange}
            closeCamera={onCloseCamera}
            switchCameraMode={switchCameraMode}
            showSelectAlbumBtn={true}
            showRecordVideoBtn={false}
            // onClickSelectAlbum={onClickSelectAlbum}
            inputPadding={{ left: 30, top: 10, right: 10, bottom: 10 }}
            galleryScale={0.6}//default = 0.5
            compressionQuality={0.6}
            cameraQuality={0.7}//default = 0.5
            customLayoutItems={{
                left: [],
                right: ['send'],
                bottom: ['gallery','emoji','camera','voice']
            }}
        />
      </View>
    )
}

