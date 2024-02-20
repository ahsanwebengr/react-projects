import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const api = createApi({
//     baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/recipes' }),
//     endpoints: (builder) => ({
//         getData: builder.query({
//             query: () => 'data',
//         }),
//     }),
// });

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/recipes' }),
});

export const { useBaseQuery } = api;


export const { useGetDataQuery } = api;
