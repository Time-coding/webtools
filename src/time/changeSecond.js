/**
 * @desc 将秒转换为hms
 * @param {Number} time 
 */
function changeSecond(time) {
    return {
        text: (Math.floor(time / 3600) >= 10 ? Math.floor(time / 3600) : "0" + Math.floor(time / 3600)) + ":" + (Math.floor(time % 3600 / 60) >= 10 ? Math.floor(time % 3600 / 60) : "0" + Math.floor(time % 3600 / 60)) + ":" + (Math.floor(time % 60) >= 10 ? Math.floor(time % 60) : "0" + Math.floor(time % 60)),
        h: Math.floor(time / 3600) >= 10 ? Math.floor(time / 3600) : "0" + Math.floor(time / 3600),
        m: Math.floor(time % 3600 / 60) >= 10 ? Math.floor(time % 3600 / 60) : "0" + Math.floor(time % 3600 / 60),
        s: Math.floor(time % 60) >= 10 ? Math.floor(time % 60) : "0" + Math.floor(time % 60)
    };
}
module.exports =changeSecond