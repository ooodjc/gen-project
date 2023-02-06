import api from './api'

//format date
function  dateFMT(time, fmt = 'yyyy-MM-dd hh:mm:ss') {
    const date = new Date(time)
    //字符串替换
    fmt = fmt.replace('yyyy', date.getFullYear())
    fmt = fmt.replace('MM', addZero(date.getMonth() + 1))
    fmt = fmt.replace('dd', addZero(date.getDate()))
    fmt = fmt.replace('hh', date.getHours())
    fmt = fmt.replace('mm', date.getMinutes())
    fmt = fmt.replace('ss', date.getSeconds())
    return fmt
}
//判断数字是否小于10，小于10补0
function addZero(num) {
    if (num < 10) {
        return '0' + num
    } else {
        return num
    }
}

//getDaysInMonth
function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate()
}

const utils = {
    dateFMT,
    getDaysInMonth,
    api
}
export default utils