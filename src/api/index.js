import http from "../plugins/http.js";

//首页轮播
export function getBanner(parms) {
    return http.get("/banner", parms);
}

export function Login(parms) {
    return http.post("login/cellphone", parms);
}

//get post 传参调用方式

// post调用方式
//  let parms ={
//     phone:phones.value,
//     password:passwords.value
// }
// Login(parms).then((res) => {

// }).catch((error) => {

// });

/***-------------------------------------------------------------- */

//get 调用方式

// let parms = {
//     id: id,
//     cookie: cook,
// };
// //检查音乐是否可用
// isPlay(parms).then((res) => {
//    if (res.success) {
//
//    } else {
//
//    }
// }).catch((error) => {
//
// });