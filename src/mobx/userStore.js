/*
 * @Author: your name
 * @Date: 2021-06-18 10:59:02
 * @LastEditTime: 2021-06-18 10:59:57
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \RnWeChat\src\mobx\userStore.js
 */
import { observable, action } from "mobx";

class UserStore {
  @observable user = {};

  @action setUser(user) {
    this.user = user;
  }

  // 清除用户信息
  @action clearUser() {
    this.user = {};
  }
}

export default new UserStore();