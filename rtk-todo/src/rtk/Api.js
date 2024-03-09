import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.freeapi.app/api/v1/',
  }),

  endpoints: builder => ({
    getTodos: builder.query({
      query: () => {
        return {
          url: 'todos',
          method: 'GET',
          // !   params, USE: if params is required
        };
      },
    }),
    postTodos: builder.mutation({
      query: ({ data }) => {
        return {
          url: 'todos',
          method: 'POST',
          body: data,
        };
      },
    }),
  }),
});

export const { useGetTodosQuery, usePostTodosMutation } = api;
