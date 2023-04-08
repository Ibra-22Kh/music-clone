import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const shazamApi = createApi({
    reducerPath: 'shazamApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam.p.rapidapi.com',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', 'c8ddc5dbecmsh4762e6b5c2c9497p192d06jsnd58872bd3a1b')
            return headers
        }
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => '/charts/track?locale=en-US&pageSize=40&startFrom=0' }),
        getSongDetails: builder.query({ query: ({ songid }) => `/songs/get-details?key=${songid}` }),
        getSongsBySearch: builder.query({ query: (searchTerm) => `/search?term=${searchTerm}`})
    })
})

export const {
    useGetTopChartsQuery,
    useGetSongDetailsQuery,
    useGetSongsBySearchQuery,
} = shazamApi;

