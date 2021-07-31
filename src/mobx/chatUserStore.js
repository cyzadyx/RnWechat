/*
 * @Author: your name
 * @Date: 2021-07-27 17:40:49
 * @LastEditTime: 2021-07-27 17:41:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \RnWeChat\src\mobx\chatUserStore.js
 */
import {observable,action} from 'mobx'
class ChatUserStore {
    @observable user = {};
  
    @action setChat(user) {
      this.user = user;
    }
  
    // 清除用户信息
    @action clearChat() {
      this.user = {};
    }
}
  
export default new ChatUserStore();