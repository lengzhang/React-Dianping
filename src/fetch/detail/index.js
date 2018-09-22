import { get } from '../get'

import { api_path } from '../../../config'

export function getInfoData(id) {
    return get(`${api_path}/api/detail/info/${id}`);
}

export function getCommentData(page, id) {
    return get(`${api_path}/api/detail/comment/${page}/${id}`);
}
