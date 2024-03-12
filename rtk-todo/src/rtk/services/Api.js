import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
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
    editTodo: build.mutation({
      query({ id, data }) {
        return {
          url: `todos/${id}`,
          method: 'PATCH',
          body: data,
        };
      },
    }),
  }),
});

export const {
  useGetTodosQuery,
  usePostTodosMutation,
  useDeleteTodoMutation,
  useEditTodoMutation,
} = api;
