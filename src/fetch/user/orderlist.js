import { get } from '../get'
import { post } from '../post'

import { api_path } from '../../../config'

export function getOrderListData(username) {
    return get(`${api_path}/api/orderlist/${username}`);
}

export function postComment(id, comment, star) {
    return post(`${api_path}/api/submitComment`, {
        id: id,
        comment: comment,
        star: star
    });
}
