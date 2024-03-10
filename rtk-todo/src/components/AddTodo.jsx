import { useGetTodosQuery, usePostTodosMutation } from '../rtk/services/Api';
import { useState } from 'react';
import { Input, Button, TextArea } from './index';
import toast from 'react-hot-toast';

const AddTodo = () => {
  let initailValue = {
    title: '',
    description: '',
    isCompleted: false,
  };
  const [value, setValue] = useState(initailValue);

  const [postTodos, { isLoading }] = usePostTodosMutation();
  const { refetch } = useGetTodosQuery();

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const res = await postTodos({ data: value });
      res?.data?.message ? toast.success(res?.data?.message) : null;

      setValue(initailValue);
      refetch();

      return res;
    } catch (error) {
      console.log(error);
      toast.error('An error occurred while creating the todo.');
    }
  };

  const handleChange = e => {
    const { name, value: inputValue } = e.target;
    setValue(prevValue => ({
      ...prevValue,
      [name]: inputValue,
    }));
  };

  return (
    <>
      <form
        className='flex flex-col gap-1 bg-white p-4 rounded-lg mb-3'
        onSubmit={handleSubmit}
      >
        <Input
          placeholder={'Enter Title'}
          value={value?.title}
          name={'title'}
          onChange={handleChange}
          required={true}
        />
        <TextArea
          placeholder={'Enter Description'}
          value={value.description}
          onChange={handleChange}
          name={'description'}
          required={true}
        />
        <Button type={'submit'} color={'text-white'} disabled={isLoading}>
          {isLoading ? 'Adding...' : 'Add'}
        </Button>
      </form>
    </>
  );
};

export default AddTodo;
