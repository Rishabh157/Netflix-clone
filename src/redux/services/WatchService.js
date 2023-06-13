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
                url: `/movie/${id}?api_key=${API_KEY}&language=en-US&append_to_response=credits`,
                method: 'GET',
            })
        }),

        // play trailer for single movie via ID 
        getPlayTrailerUrl: builder.query({
            query: (id) => ({
                url: `/movie/${id}/videos?api_key=${API_KEY}&language=en-US`,
                method: 'GET',
            })
        }),

    })
})

export const { useGetSingleMovieInfoQuery , useGetPlayTrailerUrlQuery } = watchApi;
