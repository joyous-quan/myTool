//方式一
function setCookie(name, value, expires, path){
	var exp = new Date();
	exp.setDate(exp.getDate() + expires );
	var gmtStr = exp.toGMTString();
	if(!path){ path = "/"; }
	//设置cookie
	document.cookie = name + "=" + encodeURIComponent(value) + ";expires=" + gmtStr + ";path=" + path;
}
//获取cookie
function getCookie(name){
	var cookieStr = document.cookie;
	var cookies = cookieStr.split("; ");
	for(var i = 0; i < cookies.length; i ++){
		var detail = cookies[i].split("=");
		if(detail[0] == name){
			return decodeURIComponent(detail[1]);
		}
	}
}
//删除cookie
function removeCookie(name){
	//将过期时间设置超前一天即可
	setCookie(name, "", -1)
}

//方式二
var cookieObj = {
	set: function(obj) {
		var cookieStr = encodeURIComponent(obj.name) + '=' + encodeURIComponent(obj.value);
		if(obj.expires) {
			cookieStr += ';expires=' + obj.expires;
		}
		if(obj.path) {
			cookieStr += ';path=' + obj.path;
		}
		if(obj.domain) {
			cookieStr += ';domain=' + obj.domain;
		}
		if(obj.secure) {
			cookieStr += 'secure';
		}
		document.cookie = cookieStr;
	},
	get: function(n) {
		n = encodeURIComponent(n);
		var cookieTotal = document.cookie;
		var cookies = cookieTotal.split('; ');
		for(var i=0, len=cookies.length; i++){
			var cookieArr = cookies[i].split('=');
			if(n==cookieArr[0]){
				return decodeURIComponent(cookieArr[1])
			}
		}
	},
	del: function(n) {
		var date = new Date();
		date.setHours(-1);
		this.set({
			name: n,
			expires: date
		});
	}
}

