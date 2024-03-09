import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.freeapi.app/api/v1/' }),
    endpoints: (builder) => ({
        addTodos: builder.query({
            query: () => 'todos',
        }),
    }),
});

export const {useAddTodosQuery } = api;

