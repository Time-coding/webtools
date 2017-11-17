/**
 * 
 * @desc 随机生成颜色rgb格式
 * @return {String} 
 */
function randomColorRgb() {
    var r = parseInt(255 * Math.random());
    var g = parseInt(255 * Math.random());
    var b = parseInt(255 * Math.random());
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}
module.exports = randomColorRgb;