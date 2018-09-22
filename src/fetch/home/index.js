import { get } from '../get'

import { api_path } from '../../../config'

export function getAdData() {
    return get(`${api_path}/api/homead`);
}

export function getListData(city, page) {
    return get(`${api_path}/api/homelist/${encodeURIComponent(city)}/${page}`);
}
