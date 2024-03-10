import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.freeapi.app/api/v1/',
  }),

  endpoints: build => ({
    getTodos: build.query({
      query: () => {
        return {
          url: 'todos',
          method: 'GET',
        };
      },
    }),
    postTodos: build.mutation({
      query: ({ data }) => {
        return {
          url: 'todos',
          method: 'POST',
          body: data,
        };
      },
    }),
    deleteTodo: build.mutation({
      query({ id }) {
        return {
          url: `todos/${id}`,
          method: 'DELETE',
        };
      },
    }),
  }),
});

export const { useGetTodosQuery, usePostTodosMutation, useDeleteTodoMutation } = api;
