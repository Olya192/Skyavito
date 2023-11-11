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