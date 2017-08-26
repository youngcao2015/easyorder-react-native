/**
 * Created by caoyang on 17/3/28.
 */
import * as types from '../constants/types';
import HttpUtil from '../utils/HttpUtil';
// let 声明的名称会在界面使用
export let invoicing = (url, params, isLoading, isLoadMore, isRefreshing) => {
    return dispatch => {

        // 1.发出拉取数据的信号
        dispatch(loadInvoicingList(isLoading, isLoadMore, isRefreshing));

        // 2.请求网络
        return HttpUtil.fetchGet(url, params,
            (responseObj) => {
                dispatch(receiveInvoicingContent(responseObj.result));
                console.info("success");
            },
            (error) => {
                dispatch(receiveInvoicingContent([]));
                console.info("error" + error);
            }
        )
    }
}

/**
 * Loading action
 */
let loadInvoicingList = (isLoading, isLoadMore, isRefreshing) => {
    return {
        type: types.LOAD_INVOICING_LIST,
        isLoading: isLoading,
        isLoadMore: isLoadMore,
        isRefreshing: isRefreshing
    }
}

let receiveInvoicingContent = (invoicingList) => {
    return {
        type: types.GET_INVOICING_LIST,
        invoicingList: invoicingList
    }
}