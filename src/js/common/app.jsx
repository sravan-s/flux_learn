console.log('common modules');

var base64Module = {
    getCook: function(cookiename) {
        var cookiestring=RegExp(""+cookiename+"[^;]+").exec(document.cookie);
        return unescape(!!cookiestring ? cookiestring.toString().replace(/^[^=]+./,"") : "");
    },
    getPayload: function(str) {
        var substr = str.split('.')[1];;
        return substr;
    }
};

var authModule = {
    createCookie: function(name,value,days) {
        if (days) {
            var date = new Date();
            date.setTime(date.getTime()+(days*24*60*60*1000));
            var expires = "; expires="+date.toGMTString();
        }
        else var expires = "";
        document.cookie = name+"="+value+expires+"; path=/";
    },
    logout: function() {
        this.createCookie('token',"",-1);
        window.location = '\login';
    }
};
