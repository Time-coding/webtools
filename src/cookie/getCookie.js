/**
 * 
 * @desc 根据name读取cookie
 * @param  {String} name 
 * @return {String}
 */
// function getCookie(name) {
//     var arr = document.cookie.replace(/\s/g, "").split(';');
//     for (var i = 0; i < arr.length; i++) {
//         var tempArr = arr[i].split('=');
//         if (tempArr[0] == name) {
//             return decodeURIComponent(tempArr[1]);
//         }
//     }
//     return '';
// }

function getCookie(name) {
    var arg = name + "=";
    var alen = arg.length;
    var clen = document.cookie.length;
    var i = 0;
    while (i < clen) {
        var j = i + alen;
        if (document.cookie.substring(i, j) == arg) return getCookieVal(j);
        i = document.cookie.indexOf(" ", i) + 1;
        if (i == 0) break;
    }
    return null;
}
function getCookieVal(offset) {
    var endstr = document.cookie.indexOf(";", offset);
    if (endstr == -1) endstr = document.cookie.length;
    return unescape(document.cookie.substring(offset, endstr));
}
module.exports = getCookie