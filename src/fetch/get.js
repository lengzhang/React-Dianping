import nodeFetch from 'node-fetch';

export function get(url) {
    return nodeFetch(url, {
        method: 'GET',
        mode: 'cors'
    })
}
