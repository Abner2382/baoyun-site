/**
 * Baoyun's Small Site
 * 
 * Author: RenBaoshuo
 * Date: 2020/05/21
 * Link: https://www.baoshuo.ren/
 * Github: renbaoshuo/baoyun-site
 * 
 */

// 变量定义 Define variable
var birthYear  = 2020;  /** 出生年份 Birth Year  */
var birthMonth = 1;     /** 出生月份 Birth Month */
var birthDay   = 25;    /** 出生日期 Birth Day   */

/** 函数定义 Define function */
var baoyuntime = function() {

    // 变量定义 Define variable
    var ndate  = new Date();
    var nyear  = ndate.getUTCFullYear();
    var nmonth = ndate.getUTCMonth();
    var nday   = ndate.getUTCDay();
    var nhour  = ndate.getUTCHours();
    var byear  = 0;
    var bmonth = 0;
    var mday   = new Date(nyear, nmonth, 0).getDate();

    // 将 UTC 时间转换为北京时间 Convert UTC time to Beijing time
    nhour = nhour + 8;
    if(nhour >= 24) {
        nday  = nday + 1;
        nhour = nhour - 24;
    }
    if(nday > mday) {
        nday   = nday - mday;
        nmonth = nmonth + 1;
    }
    if(nmonth > 12) {
        nmonth = nmonth - 12;
        nyear  = nyear + 1;
    }

    // 计算岁 Calculation display year
    if((nyear > birthYear) && (nmonth == birthMonth)) {
        byear = nday > 25 ? nyear - birthYear : nyear - birthYear - 1;
    } else {
        byear = nyear - birthYear;
    }
    // 判断输出 determine display
    if(byear > 0) {
        $('#baoyun-year').html(byear);
    } else {
        $('#baoyun-year-pre').hide();
        $('#baoyun-year').hide();
        $('#baoyun-year-des').hide();
    }
    
    // 计算月份 Calculation display month
    bmonth = ndate < birthDay ? nmonth - birthMonth - 1 : nmonth - birthMonth;
    // 判断输出 determine display
    if(bmonth > 0) {
        $('#baoyun-month').html(bmonth);
    } else {
        $('#baoyun-month-pre').hide();
        $('#baoyun-month').hide();
        $('#baoyun-month-des').hide();
    }
}

// 程序入口
baoyuntime();                  // 首次处理
setInterval(baoyuntime, 100);  // 后续更新

