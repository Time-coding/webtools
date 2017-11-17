/**
 * 
 * @desc  设置Cookie
 * @param {String} name 
 * @param {String} value 
 * @param {Number} extime //分
 */
// function setCookie(name, value, days) {
//     var date = new Date();
//     date.setDate(date.getDate() + days);
//     document.cookie = name + '=' + value + ';expires=' + date;
// }
function SetCookie(name, value, extime) {
    var Days = 30;
    var exp = new Date();
    var text1 = exp.getTime();
    var gq = exp.setTime(exp.getTime() + 60 * 1000 * extime); //过期时间 
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}

module.exports = setCookie