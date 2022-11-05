import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders:  (headers) => {
            headers.set('X-RapidAPI-Key, 223933c0b0msh07b99fa2cf5b429p180527jsn361ea462c22b')

            return headers;
        }
    })
})