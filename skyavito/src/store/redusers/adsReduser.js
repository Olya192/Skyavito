import { ADS_TYPE } from "../actions/types/adsType";

export const INITIAL_STATE = {
    adsList: [],
    selectAds: {},
    searchAds: [],
  }


export function adsReducer(state = INITIAL_STATE, action) {

    switch (action.type) {
        case ADS_TYPE.SET_ADS:
            return {
                ...state,
                adsList: action.payload,
                searchAds: action.payload
            }
        case ADS_TYPE.SET_SELECT_ADS:

            return {
                ...state,
                selectAds: action.payload,
            }
        case ADS_TYPE.SET_SEARCH_ADS:

            return {
                ...state,
                searchAds: action.payload
            }
        case ADS_TYPE.SET_COMMENT_ADS:

            return {
                ...state,
                commentAds: action.payload
            }


        default:
            return state;
    }

}