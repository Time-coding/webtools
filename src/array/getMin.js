/**
* 获取数组中的最小值
* @param arr
* @returns {{index: number, value: *}}
*/
function getMin(arr) {
    var minValue = arr[0];
    var minIndex = 0;
    for (var i = 0; i < arr.length; i++) {
        if (minValue > arr[i]) {
            minValue = arr[i];
            minIndex = i;
        }
    }
    return {
        index: minIndex,
        value: minValue
    };
}
module.exports = getMin