/**
 * 3D预览插件
 * @param tag //要旋转的目标元素
 * @param ctrl_area //点击能控制旋转的区域
 * @param default_rotateX //初始X轴倾斜角度
 * @param default_rotateY //初始Y轴倾斜角度
 */
function view3d(tag, ctrl_area, default_rotateX, default_rotateY) {
    ctrl_area = ctrl_area || document;
    default_rotateX = default_rotateX || 0;
    default_rotateY = default_rotateY || 0;
    tag.style.transform = "rotateX(" + default_rotateX + "deg) rotateY(" + default_rotateY + "deg)";
    // console.log(getRotate(tag).x);
    ctrl_area.onmousedown = function (e) {
        var sY = getRotate(tag).y;
        var sX = getRotate(tag).x;
        //获取初识的clientX，clientY
        var leaderX = e.clientX;
        var leaderY = e.clientY;
        ctrl_area.onmousemove = function (e) {
            var targetX = e.clientX;
            var targetY = e.clientY;
            var stepY = targetX - leaderX;
            var stepX = targetY - leaderY;
            tag.style.transform = "rotateX(" + (sX - stepX) + "deg) rotateY(" + (sY + stepY) + "deg)";
        };
        return false;
    };
    ctrl_area.onmouseup = function () {
        ctrl_area.onmousemove = null;
        // console.log(getRotate(tag).y);
        // console.log(getRotate(tag).x);
    };
    function getRotate(box) {
        var str = box.getAttribute("style");
        var re_str = "";
        for (var i = 0; i < str.length; i++) {
            if ((!isNaN(str[i]) || str[i] == "-")) {
                re_str += str[i];
            }
        }
        var arr = re_str.split(" ");
        // console.log(arr);
        return {
            x: Number(arr[1]),
            y: Number(arr[2])
        };
    }
}
module.exports = view3d