// Cookies
function setCookie(sKey, sValue, vEnd, sPath, sDomain, bSecure) {
    if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) {
        return false;
    }
    var sExpires = "";
    if (vEnd) {
        switch (vEnd.constructor) {
            case Number:
                sExpires =
                    vEnd === Infinity ?
                    "; expires=Fri, 31 Dec 9999 23:59:59 GMT" :
                    "; max-age=" + vEnd;
                break;
            case String:
                sExpires = "; expires=" + vEnd;
                break;
            case Date:
                sExpires = "; expires=" + vEnd.toUTCString();
                break;
        }
    }
    document.cookie =
        encodeURIComponent(sKey) +
        "=" +
        encodeURIComponent(sValue) +
        sExpires +
        (sDomain ? "; domain=" + sDomain : "") +
        (sPath ? "; path=" + sPath : "") +
        (bSecure ? "; secure" : "");
    return true;
}

function getCookie(name) {
    return (
        decodeURIComponent(
            document.cookie.replace(
                new RegExp(
                    "(?:(?:^|.*;)\\s*" +
                    encodeURIComponent(name).replace(
                        /[\-\.\+\*]/g,
                        "\\$&"
                    ) +
                    "\\s*\\=\\s*([^;]*).*$)|^.*$"
                ),
                "$1"
            )
        ) || null
    );
}

function deleteCookie(sKey, sPath, sDomain) {
    if (!sKey || !hasCookie(sKey)) {
        return false;
    }
    document.cookie =
        encodeURIComponent(sKey) +
        "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" +
        (sDomain ? "; domain=" + sDomain : "") +
        (sPath ? "; path=" + sPath : "");
    return true;
}

function hasCookie(sKey) {
    return new RegExp(
        "(?:^|;\\s*)" +
        encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") +
        "\\s*\\="
    ).test(document.cookie);
}

// Miscalleaneous
function navigateTo(url) {
    window.location.href = url;
}

function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    var items = location.search.substr(1).split("&");
    for (var index = 0; index < items.length; index++) {
        tmp = items[index].split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    }
    return result;
}

function hasCredentialsParameters(arrParameters){
    for (const parameter of arrParameters){
        if( findGetParameter(parameter) == null){
            return false;
        } 

    }
    return true;
}
function checkLogin() {
    if (!hasCookie("access_token") || !hasCookie("test_id")) {
        if(!hasCredentialsParameters(['access_token','test_id'])){
            navigateTo(pages.index);
        }
        
    }
}