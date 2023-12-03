import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL, API_KEY } from '../../constants/constants';

export const filterApi = createApi({
    reducerPath: 'filterName',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL
    }),

    endpoints: (builder) => ({

        // get data for accroding to genre
        getFilterByGaneras: builder.query({
            query: ({ filterName, page }) => ({
                url: `${filterName}/popular?api_key=${API_KEY}&page=${page}&language=en-US&append_to_response=credits`,
                method: 'GET',
            })
        }),

        // Documentries
        getDocumentriesAndActionsViaFilterScreen: builder.query({
            query: ({ filterName, genres, page }) => ({
                url: `${filterName}/movie?api_key=${API_KEY}&with_genres=${genres}&page=${page}`,
                method: 'GET',
            })
        }),



    })
})

export const {
    useGetFilterByGanerasQuery,
    useGetDocumentriesAndActionsViaFilterScreenQuery,
} = filterApi;
