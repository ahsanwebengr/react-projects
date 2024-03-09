import { Pencil, Trash2 } from 'lucide-react';
import { useGetTodosQuery } from '../rtk/Api';
import { v4 as uuidv4 } from 'uuid';

const TodosList = () => {
  const { data, error, isLoading } = useGetTodosQuery();

  return (
    <>
      {isLoading && <h1>Loading...⌛</h1>}
      {error && <h1>Something went Wrong 👎</h1>}
      {!isLoading && data?.data.length > 0 ? (
        <ul className='bg-white divide-y rounded-lg'>
          {data?.data?.map(todo => (
            <li key={todo?.id} className='p-2 flex justify-between items-center'>
              <div className='space-x-2'>
                <input
                  type='checkbox'
                  name='isComplete'
                  id={todo.id}
                  className='accent-blue-500 cursor-pointer'
                />
                <label
                  htmlFor={todo.id}
                  className='text-lg text-slate-800 tracking-wide font-medium cursor-pointer'
                >
                  {todo?.title}
                </label>
              </div>
              <div className='flex gap-2'>
                <div className='btn-circle text-blue-400 hover:bg-blue-400 hover:text-white bg-blue-100 flex items-center justify-center cursor-pointer size-10'>
                  <Pencil size={16} />
                </div>
                <div className='btn-circle text-red-400 hover:bg-red-400 hover:text-white bg-red-100 flex items-center justify-center cursor-pointer size-10'>
                  <Trash2 size={16} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <h1>List is Empty 📄</h1>
      )}
    </>
  );
};

export default TodosList;
