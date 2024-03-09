import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
    endpoints: (builder) => ({
        getRecipes: builder.query({
            query: () => 'recipes',
        }),
    }),
});

export const { useGetRecipesQuery } = api;

