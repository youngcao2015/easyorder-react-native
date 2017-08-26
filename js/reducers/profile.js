/**
 * Created by caoyang on 17/3/28.
 */

import * as types from '../constants/types';

const initState = {
    profileList: [],
    isLoading: true,
    isLoadMore: false,
    isRefreshing: false
}

let profile = (state = initState, action) => {
    switch (action.type) {
        case types.LOAD_PROFILE_LIST:
            return Object.assign({}, state, {
                isLoading: action.isLoading,
                isLoadMore: action.isLoadMore,
                isRefreshing: action.isRefreshing
            });
        case types.GET_PROFILE_LIST:
            return Object.assign({}, state, {
                isLoading: false,
                isRefreshing: false,
                profileList: state.isLoadMore ? state.profileList.concat(action.profileList) : action.profileList
            })
        default:
            return state;
    }
}

export default profile;