import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL, API_KEY } from '../../constants/constants';

export const bannerApi = createApi({
    reducerPath: 'banner',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL
    }),

    endpoints: (builder) => ({

        // get data for home screen banner
        getRandomBanner: builder.query({
            query: () => ({
                url: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
                method: 'GET',
                // body: body,
            })
        }),

        // get data for home screen notification panel
        getNotification: builder.query({
            query: ({page}) => ({
                url: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${page}`,
                method: 'GET',
                // body: body,
            })
        })

    })
})

export const { useGetRandomBannerQuery, useGetNotificationQuery } = bannerApi;
