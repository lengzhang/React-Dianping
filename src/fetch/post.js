import nodeFetch from 'node-fetch';

// 将对象拼接成 key1=val1&key2=val2&key3=val3 的字符串形式
function obj2params(obj) {
    var result = '';
    var item;
    for (item in obj) {
        result += '&' + item + '=' + encodeURIComponent(obj[item]);
    }

    if (result) {
        result = result.slice(1);
    }

    return result;
}

export function post(url, paramsObj) {
    return nodeFetch(url, {
        method: 'POST',
        mode: 'cors',
        body: obj2params(paramsObj)
    })
}
