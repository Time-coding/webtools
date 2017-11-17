/**
 * 根据类名获取元素
 * @param clsName 指定要获取的元素的类名属性
 * @param tarEle 指定在某个标签内进行查找 (可选，如果不传，默认为document.body) - 传入标签
 * @returns {*} 获取到的所有标签，数组形式
 */
function getByClass(clsName, tarEle) {
    //由于tarEle这个参数是一个可选参数，意味着用户可能没有传这个值。
    //可以给tarEle参数设置一个默认值：
    tarEle = tarEle || document.body;
    //能力检测：
    if (typeof document.getElementsByClassName == "function") {
        return tarEle.getElementsByClassName(clsName);
    } else {
        //1 获取用户指定范围中的所有标签
        var allTag = tarEle.getElementsByTagName("*");
        var resultArr = [];//保存最终获取结果
        var tempClass, tempArr, j;//将变量声明书写到开始位置，防止重复声明
        for (var i = 0; i < allTag.length; i++) {
            //2 依次查看类名className属性值
            tempClass = allTag[i].className;
            //3 在检测的时候需要考虑，如果一个标签同时具有多个类名，无法与指定的类名"heZi"相等
            //我们需要将取出来的类名，使用" "进行分割，根据结果数组再遍历后进行依次检测
            tempArr = tempClass.split(" ");
            for (j = 0; j < tempArr.length; j++) {
                //4 依次检测tempArr中的每个元素值与指定的类名是否相同
                if (tempArr[j] == clsName) {
                    //5 将这个标签保存到resultArr中
                    resultArr[resultArr.length] = allTag[i];
                    //6 如果找到了需要的类名部分。后面的其他部分就没有检测的必要了，直接跳出即可
                    break;//减少循环的执行次数
                }
            }
        }
        return resultArr;//返回结果
    }
}
module.export=getByClass