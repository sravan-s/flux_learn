console.log('common modules');

function getCook(cookiename) {
    var cookiestring=RegExp(""+cookiename+"[^;]+").exec(document.cookie);
    return unescape(!!cookiestring ? cookiestring.toString().replace(/^[^=]+./,"") : "");
}

function getPayload(str) {
    var substr = str.split('.')[1];;
    return substr;
}
