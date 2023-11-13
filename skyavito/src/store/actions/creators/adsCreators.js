import { ADS_TYPE } from "../types/adsType";


export const setAds = (AdsList) => {
    return {
        type: ADS_TYPE.SET_ADS,
        payload: AdsList
    }
}

export const setSelectAds = (selectAds) => {
    return {
        type: ADS_TYPE.SET_SELECT_ADS,
        payload: selectAds
    }
}

export const setSearchAds = (selectAds) => {
    return {
        type: ADS_TYPE.SET_SEARCH_ADS,
        payload: selectAds
    }
}

export const setCommentsAds = (commentAds) => {
    return {
        type: ADS_TYPE.SET_SEARCH_ADS,
        payload: commentAds
    }
}