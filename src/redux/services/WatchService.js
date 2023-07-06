import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL, API_KEY } from '../../constants/constants';

export const watchApi = createApi({
    reducerPath: 'watch',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL
    }),

    endpoints: (builder) => ({

        // get overview for single movie & tv shows
        getSingleMovieInfo: builder.query({
            query: ({ id, type }) => ({
                url: `/${type}/${id}?api_key=${API_KEY}&language=en-US&append_to_response=credits`,
                method: 'GET',
            })
        }),

        // get trailer youtube id for single movie & tv shows 
        getPlayTrailerUrl: builder.query({
            query: ({id, type}) => ({
                url: `/${type}/${id}/videos?api_key=${API_KEY}&language=en-US`,
                method: 'GET',
            })
        }),

    })
})

export const {
    useGetSingleMovieInfoQuery,
    useGetPlayTrailerUrlQuery,
} = watchApi;
