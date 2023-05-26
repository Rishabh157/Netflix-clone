import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL, API_KEY } from '../../constants/constants';

export const watchApi = createApi({
    reducerPath: 'watch',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL
    }),

    endpoints: (builder) => ({

        // get data for single movie ot tv shows
        getSingleMovieInfo: builder.query({
            query: (id) => ({
                url: `/movie/${id}?api_key=${API_KEY}`,
                method: 'GET',
            })
        }),

    })
})

export const { useGetSingleMovieInfoQuery } = watchApi;
