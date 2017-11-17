/**
 * @desc webpack打包入口文件
 */
const view3d = require('./3d/view3d')

const arrayEqual = require('./array/arrayEqual')
const getMax = require('./array/getMax')
const getMin = require('./array/getMin')

const addClass = require('./class/addClass')
const hasClass = require('./class/hasClass')
const removeClass = require('./class/removeClass')
const getByClass = require('./class/getByClass')

const getCookie = require('./cookie/getCookie')
const removeCookie = require('./cookie/removeCookie')
const setCookie = require('./cookie/setCookie')
const setCookieDay = require('./cookie/setCookieDay')

const getOS = require('./device/getOS')
const getExplore = require('./device/getExplore')

const getScrollTop = require('./dom/getScrollTop')
const offset = require('./dom/offset')
const getText = require('./dom/getText')
const scrollTo = require('./dom/scrollTo')
const setScrollTop = require('./dom/setScrollTop')

const debounce = require('./function/debounce')
const throttle = require('./function/throttle')

const getKeyName = require('./keycode/getKeyName')

const deepClone = require('./object/deepClone')
const isEmptyObject = require('./object/isEmptyObject')

const randomColor = require('./random/randomColor')
const randomColorRgb = require('./random/randomColorRgb')
const randomNum = require('./random/randomNum')

const isEmail = require('./regexp/isEmail')
const isIdCard = require('./regexp/isIdCard')
const isPhoneNum = require('./regexp/isPhoneNum')
const isUrl = require('./regexp/isUrl')

const digitUppercase = require('./string/digitUppercase')

const isSupportWebP = require('./support/isSupportWebP')

const changeSecond = require('./time/changeSecond')
const formatPassTime = require('./time/formatPassTime')
const formatRemainTime = require('./time/formatRemainTime')

const parseQueryString = require('./url/parseQueryString')
const stringfyQueryString = require('./url/stringfyQueryString')


webcommon = {
    view3d,

    arrayEqual,
    getMax,
    getMin,

    addClass,
    hasClass,
    removeClass,
    getByClass,

    getCookie,
    removeCookie,
    setCookie,
    setCookieDay,

    getOS,
    getExplore,

    getScrollTop,
    offset,
    getText,
    scrollTo,
    setScrollTop,

    debounce,
    throttle,

    getKeyName,

    deepClone,
    isEmptyObject,

    randomColor,
    randomColorRgb,
    randomNum,

    isEmail,
    isIdCard,
    isPhoneNum,
    isUrl,

    digitUppercase,

    isSupportWebP,

    changeSecond,
    formatPassTime,
    formatRemainTime,
    parseQueryString,
    stringfyQueryString,
}
module.exports = webcommon