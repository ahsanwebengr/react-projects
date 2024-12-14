import { useEffect } from 'react';
import usePostStore from '../stores/postsStore';

const PostsList = () => {
  const { posts, fetchPosts, loading, error, deletePost, addPost, updatePost } =
    usePostStore();

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const handleDelete = id => {
    if (window.confirm(`Are you sure you want to delete post ${id}?`)) {
      deletePost(id);
    }
  };

  const handleUpdate = async id => {
    const newTitle = prompt('Enter new title');
    if (newTitle) {
      try {
        await updatePost({
          id,
          payload: { title: newTitle },
        });
        alert(`Post ${id} updated successfully!`);
      } catch (error) {
        console.error('Failed to update post.', error);
      }
    } else {
      alert('Update cancelled. No title provided.');
    }
  };

  const handleNewPost = () => {
    const newPost = prompt('Write post');
    if (newPost) {
      addPost({
        userId: 1,
        title: newPost,
        body: `${newPost} est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla`,
      });
    }
  };

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Post List</h1>
      <button onClick={handleNewPost}>Add New Post</button>
      {posts.length > 0 ? (
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <strong>{post.title}</strong> - {post.body}
              <div className='actions'>
                <button onClick={() => handleDelete(post.id)}>Delete</button>
                <button onClick={() => handleUpdate(post.id)}>Update</button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No posts found.</p>
      )}
    </div>
  );
};

export default PostsList;
