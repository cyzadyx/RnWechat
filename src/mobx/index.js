/*
 * @Author: your name
 * @Date: 2021-06-18 10:58:29
 * @LastEditTime: 2021-06-18 10:58:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \RnWeChat\src\mobx\index.js
 */
import {observable,action} from 'mobx'

class RootStore {
  @observable mobile = "";
  @observable token = "";
  @observable userId = "";

  @action setUserInfo(mobile, token, userId) {
    this.mobile = mobile;
    this.token = token;
    this.userId = userId;
  }
  @action clearUserInfo() {
    this.mobile = "";
    this.token = "";
    this.userId = "";
  }
}

export default new RootStore();