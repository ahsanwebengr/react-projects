import { useDeleteTodoMutation, useGetTodosQuery } from '../rtk/services/Api';
import { Pencil, Trash2 } from 'lucide-react';
import { dateFormat } from '../utils/dateFormatter';
import toast from 'react-hot-toast';

const TodosList = () => {
  const [deleteTodo] = useDeleteTodoMutation();
  const { data: todos = [], isLoading, isError, error, refetch } = useGetTodosQuery();

  const handleDeleteTodo = async id => {
    try {
      const res = await deleteTodo({ id });

      res?.data?.message ? toast.success(res.data.message) : null;
      refetch();
      return res;
    } catch (error) {
      console.log('Error deleting todo:', error);
      toast.error('An error occurred while deleting the todo.');
    }
  };

  return (
    <>
      {isLoading && <h2>Loading...⌛</h2>}
      {isError && <h2>{error.status} 👎</h2>}
      {!isLoading && todos?.data.length > 0 ? (
        <section className='w-full grid grid-cols-4 gap-3'>
          {todos?.data?.map(todo => (
            <article
              key={todo?._id}
              className='card bg-white p-2 min-h-40 justify-center gap-3'
            >
              <div className='space-x-2'>
                <input
                  type='checkbox'
                  name='isComplete'
                  id={todo?._id}
                  className='accent-blue-500 cursor-pointer'
                />
                <label
                  htmlFor={todo?._id}
                  className='text-xl truncate text-slate-800 tracking-wide font-medium cursor-pointer'
                >
                  {todo?.title}
                </label>
              </div>
              <p className='line-clamp-3 text-lg'>{todo?.description}</p>
              <small>{dateFormat(todo?.createdAt)}</small>
              <div className='flex gap-2 justify-end'>
                <div className='btn-circle text-blue-400 hover:bg-blue-400 hover:text-white bg-blue-100 flex items-center justify-center cursor-pointer size-10'>
                  <Pencil size={16} />
                </div>
                <div
                  onClick={() => handleDeleteTodo(todo?._id)}
                  className='btn-circle text-red-400 hover:bg-red-400 hover:text-white bg-red-100 flex items-center justify-center cursor-pointer size-10'
                >
                  <Trash2 size={16} />
                </div>
              </div>
            </article>
          ))}
        </section>
      ) : (
        !isLoading && <h2>List is Empty 📄</h2>
      )}
    </>
  );
};

export default TodosList;
