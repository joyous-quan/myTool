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


/*
jQuery.cookie = function(name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        var path = options.path ? '; path=' + options.path : '';
        var domain = options.domain ? '; domain=' + options.domain : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};*/