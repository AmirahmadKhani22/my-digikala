import {configureStore} from "@reduxjs/toolkit"
import {getData} from "./slices/homePage"

const store = configureStore({
    reducer: {
        getHomePageData: getData,
    },
})

export default store
