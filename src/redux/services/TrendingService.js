import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL, API_KEY } from '../../constants/constants';

export const trendingApi = createApi({
    reducerPath: 'trending',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL
    }),

    endpoints: (builder) => ({

        getTrendingMovies: builder.query({
            query: () => ({
                url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
                method: 'GET',
                // body: body,
            })
        })

    })
})

export const { useGetTrendingMoviesQuery } = trendingApi;
