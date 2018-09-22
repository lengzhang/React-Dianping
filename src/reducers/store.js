import { merge, remove, uniq } from 'lodash';

let initialState = {
    list: []
};

export default function user(state = initialState, action = {}) {

    switch (action.type) {

        case 'STORE_UPDATE':
            state.list = uniq([...action.data]);
            return state;

        case 'STORE_ADD':
            state.list = uniq([...state.list, action.data]);
            return state;

        case 'STORE_RM':
            remove(state.list, (element) => element === action.data);
            return state;

        default:
            return state;
    }

}

// 获取 store
export const getStore = (state) => state.store.list || [];
