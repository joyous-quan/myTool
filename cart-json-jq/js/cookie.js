var cookieObj = {
    set: function(obj) {
        var cookieStr = encodeURIComponent(obj.name) + "=" + encodeURIComponent(obj.value);
        if(obj.expires) {
            cookieStr += ";expires=" + obj.expires;
        }
        if(obj.path) {
            cookieStr += ";path=" + obj.path;
        }
        if(obj.domain) {
            cookieStr += ";domain=" + obj.domain;
        }
        if(obj.secure) {
            cookieStr += ";secure";
        }

        document.cookie = cookieStr;
    },
    del: function(n) {
        var date = new Date();
        date.setHours(-1);
        this.set({
            name: n,
            expires: date
        });
    },
    get: function(n) {
        n = encodeURIComponent(n);
        var cooikeTotal = document.cookie;
        var cookies = cooikeTotal.split("; ");
        for(var i = 0, len = cookies.length; i < len; i++) {
            var arr = cookies[i].split("=");
            if(n == arr[0]) {
                return decodeURIComponent(arr[1]);
            }
        }
    }
}
