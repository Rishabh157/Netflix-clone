import { configureStore } from "@reduxjs/toolkit";
// API
import { bannerApi } from './services/BannerService';
import { browseApi } from "./services/BrowseService";
import { searchApi } from "./services/SearchService";
import { watchApi } from "./services/WatchService";
import { personApi } from "./services/PersonService";

//Slices
import searchSlice from "./slice/searchSlice";

export const store = configureStore({
    reducer: {
        // redux slice
        searchValue: searchSlice,
        // API
        [bannerApi.reducerPath]: bannerApi.reducer,
        [browseApi.reducerPath]: browseApi.reducer,
        [searchApi.reducerPath]: searchApi.reducer,
        [watchApi.reducerPath]: watchApi.reducer,
        [personApi.reducerPath]: personApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat([
            bannerApi.middleware,
            browseApi.middleware,
            searchApi.middleware,
            watchApi.middleware,
            personApi.middleware
        ]),
});
