# webtools

[![Build Status](https://travis-ci.org/Time-coding/webtools.svg?branch=master) ![LICENSE MIT](https://img.shields.io/npm/l/express.svg)](https://www.npmjs.com/package/webtools) 

 
前端业务代码工具库  

> 本次工具是模仿webtools，自己造轮子，还有网上收集的工具函数，进一步封装,在这里感谢webtools的作者，还有好友Alex

> 目的：高效率完成前端业务代码

业务开发过程中，会经常用到`日期格式化`、`url参数转对象`、`浏览器类型判断`、`节流函数`等常用函数，为避免不同项目多次复制粘贴的麻烦，这里统一封装，并发布到npm，以提高开发效率。如果你也有常用的代码，欢迎为本项目提交pr。

## 安装使用

1. 直接下载`min`目录下的[webtools.min.js](https://github.com/Time-coding/webtools/blob/master/min/webtools.min.js)使用，支持UMD通用模块规范  
2. 使用npm安装

### 浏览器:
``` html
  <script src="webtools.min.js"></script>
  <script>
      var OS = webtools.getOS()
  </script>
```

### npm:
``` bash
$ npm install --save-dev webtools
```

webpack、RequireJS、SeaJS等

``` javascript
// 完整引入
const webtools = require('webtools')
const OS = webtools.getOS()
```

**推荐使用方法**  

你真的不需要完整引入所有函数，所以只引入需要使用的方法即可。
``` javascript
// 只引入部分方法('webtools/<方法名>')
const getOS = require('webtools/getOS')
const OS = getOS()
```
## API文档

### Array  
#### &emsp;&emsp;[arrayEqual][arrayEqual]&emsp;&emsp;判断两个数组是否相等 
#### &emsp;&emsp;[getMax][getMax]&emsp;&emsp;获取数组的最大值 
#### &emsp;&emsp;[getMin][getMin]&emsp;&emsp;获取数组的最小值 

### Class
#### &emsp;&emsp;[addClass][addClass]&emsp;&emsp;为元素添加class  
#### &emsp;&emsp;[hasClass][hasClass]&emsp;&emsp;判断元素是否有某个class  
#### &emsp;&emsp;[removeClass][removeClass]&emsp;&emsp;为元素移除class  
#### &emsp;&emsp;[getByClass][getByClass]&emsp;&emsp;根据类名获取元素  


### Cookie 
#### &emsp;&emsp;[getCookie][getCookie]&emsp;&emsp;根据name读取Cookie  
#### &emsp;&emsp;[removeCookie][removeCookie]&emsp;&emsp;根据name删除Cookie
#### &emsp;&emsp;[setCookie][setCookie]&emsp;&emsp;添加Cookie 

### Device  
#### &emsp;&emsp;[getExplore][getExplore]&emsp;&emsp;获取浏览器类型和版本号  
#### &emsp;&emsp;[getOS][getOS]&emsp;&emsp;获取操作系统类型

### Dom  
#### &emsp;&emsp;[getScrollTop][getScrollTop]&emsp;&emsp;获取滚动条距顶部的距离
#### &emsp;&emsp;[offset][offset]&emsp;&emsp;获取一个元素的距离文档(document)的位置，类似jQ中的offset()
#### &emsp;&emsp;[getText][getText]&emsp;&emsp;获取标签内部的纯文本内容
#### &emsp;&emsp;[scrollTo][scrollTo]&emsp;&emsp;在${duration}时间内，滚动条平滑滚动到${to}指定位置
#### &emsp;&emsp;[setScrollTop][setScrollTop]&emsp;&emsp;设置滚动条距顶部的距离

### Function  
#### &emsp;&emsp;[debounce][debounce]&emsp;&emsp;函数防抖   
#### &emsp;&emsp;[throttle][throttle]&emsp;&emsp;函数节流   

### Keycode  
#### &emsp;&emsp;[getKeyName][getKeyName]&emsp;&emsp;根据keycode获得键名 

### Object  
#### &emsp;&emsp;[deepClone][deepClone]&emsp;&emsp;深拷贝，支持常见类型
#### &emsp;&emsp;[isEmptyObject][isEmptyObject]&emsp;&emsp;判断Object是否为空

### Random  
#### &emsp;&emsp;[randomColorRgb][randomColorRgb] &emsp;&emsp;随机生成颜色Rgb格式
#### &emsp;&emsp;[randomColor][randomColor] &emsp;&emsp;随机生成颜色
#### &emsp;&emsp;[randomNum][randomNum]&emsp;&emsp;生成指定范围随机数 

### Regexp  
#### &emsp;&emsp;[isEmail][isEmail]&emsp;&emsp;判断是否为邮箱地址 
#### &emsp;&emsp;[isIdCard][isIdCard]&emsp;&emsp;判断是否为身份证号
#### &emsp;&emsp;[isPhoneNum][isPhoneNum]&emsp;&emsp;判断是否为手机号  
#### &emsp;&emsp;[isUrl][isUrl]&emsp;&emsp;判断是否为URL地址

### String  
#### &emsp;&emsp;[digitUppercase][digitUppercase]&emsp;&emsp;现金额转大写

### Support  
#### &emsp;&emsp;[isSupportWebP][isSupportWebP]&emsp;&emsp;判断浏览器是否支持webP格式图片
#### 

### Time  
#### &emsp;&emsp;[changeSecond][changeSecond]&emsp;&emsp;将秒转换为h:m:s
#### &emsp;&emsp;[formatPassTime][formatPassTime]&emsp;&emsp;格式化${startTime}距现在的已过时间
#### &emsp;&emsp;[formatRemainTime][formatRemainTime]&emsp;&emsp;格式化现在距${endTime}的剩余时间

### Url
#### &emsp;&emsp;[parseQueryString][parseQueryString]&emsp;&emsp;url参数转对象
#### &emsp;&emsp;[stringfyQueryString][stringfyQueryString]&emsp;&emsp;对象序列化

### 3D
#### &emsp;&emsp;[view3d][view3d]&emsp;&emsp;点击鼠标拖动，查看3D效果

[arrayEqual]:https://github.com/Time-coding/webtools/blob/master/arrayEqual.js
[getMax]:https://github.com/Time-coding/webtools/blob/master/getMax.js
[getMin]:https://github.com/Time-coding/webtools/blob/master/getMin.js

[addClass]:https://github.com/Time-coding/webtools/blob/master/addClass.js
[hasClass]:https://github.com/Time-coding/webtools/blob/master/hasClass.js
[removeClass]:https://github.com/Time-coding/webtools/blob/master/removeClass.js
[getByClass]:https://github.com/Time-coding/webtools/blob/master/getByClass.js

[getCookie]:https://github.com/Time-coding/webtools/blob/master/src/cookie/getCookie.js
[removeCookie]:https://github.com/Time-coding/webtools/blob/master/src/cookie/removeCookie.js
[setCookie]:https://github.com/Time-coding/webtools/blob/master/src/cookie/setCookie.js
[setCookieDay]:https://github.com/Time-coding/webtools/blob/master/src/cookie/setCookieDay.js

[getExplore]:https://github.com/Time-coding/webtools/blob/master/src/device/getExplore.js
[getOS]:https://github.com/Time-coding/webtools/blob/master/src/device/getOS.js

[getScrollTop]:https://github.com/Time-coding/webtools/blob/master/src/dom/getScrollTop.js
[offset]:https://github.com/Time-coding/webtools/blob/master/src/dom/offset.js
[getText]:https://github.com/Time-coding/webtools/blob/master/src/dom/getText.js
[scrollTo]:https://github.com/Time-coding/webtools/blob/master/src/dom/scrollTo.js
[setScrollTop]:https://github.com/Time-coding/webtools/blob/master/src/dom/setScrollTop.js

[debounce]:https://github.com/Time-coding/webtools/blob/master/src/function/debounce.js
[throttle]:https://github.com/Time-coding/webtools/blob/master/src/function/throttle.js

[getKeyName]:https://github.com/Time-coding/webtools/blob/master/src/keycode/getKeyName.js

[deepClone]:https://github.com/Time-coding/webtools/blob/master/src/object/deepClone.js
[isEmptyObject]:https://github.com/Time-coding/webtools/blob/master/src/object/isEmptyObject.js

[randomColor]:https://github.com/Time-coding/webtools/blob/master/src/random/randomColor.js
[randomColorRgb]:https://github.com/Time-coding/webtools/blob/master/src/random/randomColor.js
[randomNum]:https://github.com/Time-coding/webtools/blob/master/src/random/randomNum.js

[isEmail]:https://github.com/Time-coding/webtools/blob/master/src/regexp/isEmail.js
[isIdCard]:https://github.com/Time-coding/webtools/blob/master/src/regexp/isIdCard.js
[isPhoneNum]:https://github.com/Time-coding/webtools/blob/master/src/regexp/isPhoneNum.js
[isUrl]:https://github.com/Time-coding/webtools/blob/master/src/regexp/isUrl.js

[digitUppercase]:https://github.com/Time-coding/webtools/blob/master/src/string/digitUppercase.js

[isSupportWebP]:https://github.com/Time-coding/webtools/blob/master/src/support/isSupportWebP.js

[changeSecond]:https://github.com/Time-coding/webtools/blob/master/src/time/changeSecond.js
[formatPassTime]:https://github.com/Time-coding/webtools/blob/master/src/time/formatPassTime.js
[formatRemainTime]:https://github.com/Time-coding/webtools/blob/master/src/time/formatRemainTime.js

[parseQueryString]:https://github.com/Time-coding/webtools/blob/master/src/url/parseQueryString.js
[stringfyQueryString]:https://github.com/Time-coding/webtools/blob/master/src/url/stringfyQueryString.js
[view3d]:https://github.com/Time-coding/webtools/blob/master/src/3d/view3d.js