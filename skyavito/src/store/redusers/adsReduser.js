import { ADS_TYPE } from "../actions/types/adsType";

export const INITIAL_STATE = {
    adsList: [],
    selectAds: {}
}


export function adsReducer(state = INITIAL_STATE, action) {

    switch (action.type) {
        case ADS_TYPE.SET_ADS:
            return {
                ...state,
                adsList: action.payload
            }
        case ADS_TYPE.SET_SELECT_ADS:

            return {
                ...state,
                selectAds: action.payload
            }

        default:
            return state;
    }

}