/**
 * Created by caoyang on 17/3/28.
 */

import * as types from '../constants/types';

const initState = {
    invoicingList: [],
    isLoading: true,
    isLoadMore: false,
    isRefreshing: false
}

let invoicing = (state = initState, action) => {
    switch (action.type) {
        case types.LOAD_INVOICING_LIST:
            return Object.assign({}, state, {
                isLoading: action.isLoading,
                isLoadMore: action.isLoadMore,
                isRefreshing: action.isRefreshing
            });
        case types.GET_INVOICING_LIST:
            return Object.assign({}, state, {
                isLoading: false,
                isRefreshing: false,
                invoicingList: state.isLoadMore ? state.invoicingList.concat(action.invoicingList) : action.invoicingList
            })
        default:
            return state;
    }
}

export default invoicing;