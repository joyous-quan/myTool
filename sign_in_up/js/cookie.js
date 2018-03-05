function removeCookie(name){
    // 将cookie的过期时间指定为过去的一个事件
    setCookie(name, "", -1);
}

// 查询cookie : 根据cookie的名称, 获得cookie的value值
function getCookie(name){
    // document.cookie : "name1=value1; name2=value2; name3=value3";
    // 获取到所有的cookie所组成的字符串
    var cookieStr = document.cookie;

    // 将name和value对都取出来
    var cookies = cookieStr.split('; '); // alue["name1=v1", "name2=value2", "name3=value3"]
    // 遍历所有的nv对
    for(var i = 0; i < cookies.length; i++){
        var detail = cookies[i].split('='); // ["name1", "value1"]
        if(detail[0] == name){
            return decodeURIComponent(detail[1]);
        }
    }
    // return "";
}

function setCookie(name, value, expires, path){
    // document.cookie = "name=value;expires=GMTString";
    // 以当前时间为准, 创建事件对象
    var exp = new Date();
    // 将时间对象中的时间设置到指定天数之后的
    exp.setDate(exp.getDate() + expires);
    // 获取gmt字符串
    var gmtStr = exp.toGMTString();

    if(!path){
        path = "/";
    }

    // 设置cookie
    document.cookie = name + "=" + encodeURIComponent(value) + ";expires=" + gmtStr + ";path=" + path;
}