import { create } from 'zustand';
import http from '../lib/http';

const usePostStore = create((set, get) => ({
  posts: [],
  loading: false,
  error: null,

  fetchPosts: async () => {
    set({ loading: true, error: null });
    try {
      const response = await http.get('posts');
      const data = response.data;
      set({ posts: data, loading: false });
    } catch (error) {
      set({ error: 'Failed to fetch posts', loading: false });
      console.error('Error fetching posts:', error);
    }
  },

  addPost: async payload => {
    try {
      const response = await http.post('posts', payload);
      const addedPost = response.data;
      set({ posts: [...get().posts, addedPost] });
    } catch (error) {
      set({ error: 'Failed to add post' });
      console.error('Error adding post:', error);
    }
  },

  updatePost: async ({ id, payload }) => {
    try {
      const response = await http.put(`posts/${id}`, payload);
      const updatedPost = response.data;
      set({
        posts: get().posts.map(post => (post.id === id ? { ...post, ...payload } : post)),
      });
    } catch (error) {
      set({ error: 'Failed to update post' });
      console.error('Error updating post:', error);
    }
  },

  deletePost: async id => {
    try {
      await http.delete(`posts/${id}`);
      set({
        posts: get().posts.filter(post => post.id !== id),
      });
    } catch (error) {
      set({ error: 'Failed to delete post' });
      console.error('Error deleting post:', error);
    }
  },
}));

export default usePostStore;
