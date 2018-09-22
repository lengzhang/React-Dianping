import { get } from '../get'

import { api_path } from '../../../config'

export function getSearchData(page, cityName, category, keyword) {
    const keywordStr = keyword ? '/' + keyword : ''
    return get(`${api_path}/api/search/${page}/${encodeURIComponent(cityName)}/${category}${keywordStr}`)
}
