import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL, API_KEY } from '../../constants/constants';

export const searchApi = createApi({
    reducerPath: 'search',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL
    }),

    endpoints: (builder) => ({

        // get data for search input value
        getSearchMovies: builder.mutation({
            query: ({ page, searchValue }) => ({
                url: `search/multi?api_key=${API_KEY}&language=en-US&query=${searchValue}&page=${page}&include_adult=false`,
                method: 'GET',
            })
        }),

    })
})

export const { useGetSearchMoviesMutation } = searchApi;
