import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL, API_KEY } from '../../constants/constants';

export const browseApi = createApi({
    reducerPath: 'browse',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL
    }),

    endpoints: (builder) => ({

        // Trendings
        getTrendingMovies: builder.query({
            query: () => ({
                url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
                method: 'GET',
                // body: body,
            })
        }),

        // Top Rated Movies
        getTopRatedMovies: builder.query({
            query: () => ({
                url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
                method: 'GET',
                // body: body,
            })
        }),

        // Actions Movies
        getActionsMovies: builder.query({
            query: () => ({
                url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
                method: 'GET',
                // body: body,
            })
        }),

        // Comedy Movies
        getComedyMovies: builder.query({
            query: () => ({
                url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
                method: 'GET',
                // body: body,
            })
        }),

        // Horror Movies
        getHorrorMovies: builder.query({
            query: () => ({
                url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
                method: 'GET',
                // body: body,
            })
        }),

        // Romantic Movies
        getRomanticMovies: builder.query({
            query: () => ({
                url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
                method: 'GET',
                // body: body,
            })
        }),

        // Documentries
        getDocumentries: builder.query({
            query: () => ({
                url: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
                method: 'GET',
                // body: body,
            })
        }),

        // Popular Movies
        getPopularMovies: builder.query({
            query: () => ({
                url: `movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
                method: 'GET',
                // body: body,
            })
        }),
        
    })
})

export const {
    useGetTrendingMoviesQuery,
    useGetTopRatedMoviesQuery,
    useGetActionsMoviesQuery,
    useGetComedyMoviesQuery,
    useGetHorrorMoviesQuery,
    useGetRomanticMoviesQuery,
    useGetDocumentriesQuery,
    useGetPopularMoviesQuery,
} = browseApi;
