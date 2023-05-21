import { configureStore } from "@reduxjs/toolkit";
// API
import { bannerApi } from './services/BannerService';
import { trendingApi } from "./services/TrendingService";

//Slices
import counterSlice from "./slice/counterSlice";

export const store = configureStore({
    reducer: {
        // redux slice
        'rishabh': counterSlice,

        // API
        [bannerApi.reducerPath]: bannerApi.reducer,
        [trendingApi.reducerPath]: trendingApi.reducer,
    },

    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(bannerApi.middleware),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat([
            bannerApi.middleware,
            trendingApi.middleware
        ]),

});
