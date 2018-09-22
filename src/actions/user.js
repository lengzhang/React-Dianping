export function updateCityName({cityName}) {
    return dispatch => {
        dispatch({
            type: 'CITYNAME_UPDATE',
            cityName
        })
    }
}

export function updateUserName({username}) {
    return dispatch => {
        dispatch({
            type: 'USERNAME_UPDATE',
            username
        })
    }
}
