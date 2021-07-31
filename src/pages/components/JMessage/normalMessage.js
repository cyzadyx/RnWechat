/*
 * @Author: your name
 * @Date: 2021-07-28 13:46:24
 * @LastEditTime: 2021-07-28 13:47:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \RnWeChat\src\pages\components\JMessage\constructNormalMessage.js
 */

let themsgid = 1

// 负责创建各种类型的消息
export default function normalMessage() {

  // 创建了一个消息对象
  const message = {}
  // 
  message.msgId = themsgid.toString()
  themsgid += 1
  // 消息的状态 => 发送完成
  message.status = "send_succeed";
  // 当前这条消息 是发送出去的 还是 接收回来
  // 接受者:
  //                          发送者:
  message.isOutgoing = true;

  message.timeString = "";
  message.fromUser = {
    userId: "",
    displayName: "",
    avatarPath: ""
  }
  return message
}

