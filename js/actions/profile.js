/**
 * Created by caoyang on 17/3/28.
 */
import * as types from '../constants/types';
import HttpUtil from '../utils/HttpUtil';
// let 声明的名称会在界面使用
export let profile = (url, params, isLoading, isLoadMore, isRefreshing) => {
    return dispatch => {

        // 1.发出拉取数据的信号
        dispatch(loadProfileList(isLoading, isLoadMore, isRefreshing));

        // 2.请求网络
        return HttpUtil.fetchGet(url, params,
            (responseObj) => {
                dispatch(receiveProfileContent(responseObj.result));
                console.info("success");
            },
            (error) => {
                dispatch(receiveProfileContent([]));
                console.info("error" + error);
            }
        )
    }
}

/**
 * Loading action
 */
let loadProfileList = (isLoading, isLoadMore, isRefreshing) => {
    return {
        type: types.LOAD_PROFILE_LIST,
        isLoading: isLoading,
        isLoadMore: isLoadMore,
        isRefreshing: isRefreshing
    }
}

let receiveProfileContent = (profileList) => {
    return {
        type: types.GET_PROFILE_LIST,
        profileList: profileList
    }
}
