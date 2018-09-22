import merge from 'lodash/merge';

let initialState = {
    username: '',
    cityName: '北京'
}

export default function user(state = initialState, action = {}) {

    switch (action.type) {

        case 'CITYNAME_UPDATE':
            state.cityName = action.cityName;
            return merge({}, state, {});

        case 'USERNAME_UPDATE':
            state.username = action.username;
            return merge({}, state, {});

        default:
            return state;
    }

}

// 获取用户信息
export const getUserInfo = (state) => state.user || {};
// 获取 cityName
export const getCityName = (state) => state.user.cityName || '';
// 获取 username
export const getUserName = (state) => state.user.username || '';
