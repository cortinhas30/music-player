import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://spotify81.p.rapidapi.com/',
    prepareHeaders: (headers) => {
        headers.set('X-RapidAPI-Key', );

        return headers;
    },
  }),
  endpoints: (builder) => ({
    getTop20: builder.query({ query: () => '/top_200_tracks'}),
  }),
});

export const {
  useGetTop20Query,
} = shazamCoreApi;