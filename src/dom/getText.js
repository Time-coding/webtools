/**
 * 用于获取标签内部的纯文本内容
 * @param tag 要进行内容获取的标签
 * @returns {string} 返回值为获取到的文本内容，字符串类型
 */
function getText(tag) {
    //如果浏览器不认识这个属性，那么值为undefined
    if (tag.innerText !== undefined) {
        //说明支持
        return tag.innerText;
    } else {
        //不支持innerText，使用textContent
        return tag.textContent;
    }
}
module.exports =getText;