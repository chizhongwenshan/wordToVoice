
getTime = ()=>{
    var now = new Date();
    var year = now.getFullYear(); //获取年份
    var month = now.getMonth() + 1; //获取当前月份(0-11,0代表1月)
    var day = now.getDate(); //获取当前日
    var hour = now.getHours(); //获取当前小时数
    var minute = now.getMinutes(); //获取当前分钟数
    var second = now.getSeconds(); //获取当前秒数
    var timeStr = year + "年" + (month<10?"0"+month:month) + "月" + (day<10?"0"+day:day)+ "日"+ (hour<10?"0"+hour:hour) + "时" + (minute<10?"0"+minute:minute) + "分" ;
    console.log(timeStr);
    return timeStr
}

module.exports=getTime