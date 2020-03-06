/*
 * @Description: 
 * @Author: 郭军伟
 * @Date: 2020-03-06 14:11:20
 * @lastEditTime: Do not edit
 */
onmessage = function (e) {
  this.console.log(e.data);
  postMessage(e.data[0] * e.data[1]);
}