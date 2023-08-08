import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL, API_KEY } from '../../constants/constants';

export const personApi = createApi({
    reducerPath: 'person',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL
    }),

    endpoints: (builder) => ({
        // Person Known For List
        getPersonDetails: builder.query({
            query: (id) => ({
                url: `/person/${id}?api_key=${API_KEY}`,
                method: 'GET',
            })
        }),

        // Person Known For List
        getPersonKnownForMoviesList: builder.query({
            query: (id) => ({
                url: `/person/${id}/movie_credits?api_key=${API_KEY}`,
                method: 'GET',
            })
        }),
    })
})

export const {
    useGetPersonDetailsQuery,
    useGetPersonKnownForMoviesListQuery,
} = personApi;
