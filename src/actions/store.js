export function updateStore(data) {
    return dispatch => {
        dispatch({
            type: 'STORE_UPDATE',
            data
        })
    }
}

export function addStore(data) {
    return dispatch => {
        dispatch({
            type: 'STORE_ADD',
            data
        })
    }
}

export function rmStore(data) {
    return dispatch => {
        dispatch({
            type: 'STORE_RM',
            data
        })
    }
}
