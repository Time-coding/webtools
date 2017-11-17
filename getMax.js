/**
* 获取数组中的最大值
* @param arr
* @returns {{index: number, value: *}}
*/
function getMax(arr) {
    var maxValue = arr[0];
    var maxIndex = 0;
    for (var i = 0; i < arr.length; i++) {
        if (maxValue < arr[i]) {
            maxValue = arr[i];
            maxIndex = i;
        }
    }
    return {
        index: maxIndex,
        value: maxValue
    };
}
module.exports = getMax