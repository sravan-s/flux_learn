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
