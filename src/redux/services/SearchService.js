import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL, API_KEY } from '../../constants/constants';

export const searchApi = createApi({
    reducerPath: 'search',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL
    }),

    endpoints: (builder) => ({

        // get data for search input value
        getSearchMovies: builder.query({
            query: ({ page, searchValue }) => ({
                url: `search/movie?query=${searchValue}&include_adult=false&language=en-US&page=${page}`,
                method: 'GET',
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMWI5MmY0Y2UwYTZjNDgzNThiNmE1NWI5N2IyNDNlNyIsInN1YiI6IjYyOTUxMzQyZGY4NmE4MzRlMjMwNzZiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Yqel-xJrol92czo-4Yrhqg13TGj-t-HUWH0GxugLBxo'
                }
            })
        }),


    })
})

export const { useGetSearchMoviesQuery } = searchApi;
