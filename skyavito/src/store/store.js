import { configureStore } from "@reduxjs/toolkit"
import { adsReducer } from "./redusers/adsReduser"
import thunk from "redux-thunk"

export const store = configureStore({
    reducer: {
        ads: adsReducer
    },
    middleware: [thunk]
})

