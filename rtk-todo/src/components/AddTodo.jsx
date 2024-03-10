import { useEffect, useState } from 'react';
import { usePostTodosMutation } from '../rtk/Api';
import { Input, Button, TextArea } from './index';

const AddTodo = () => {
  const [value, setValue] = useState({
    title: '',
    description: '',
    isCompleted: false,
  });

  const [postTodos, { isLoading }] = usePostTodosMutation();

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const payload = await postTodos({ data: value }).unwrap();
      console.log(payload, 'postTodo payload');
    } catch (error) {
      console.log(error);
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
        />
        <TextArea
          placeholder={'Enter Description'}
          value={value.description}
          onChange={handleChange}
          name={'description'}
        />
        <Button type={'submit'} color={'text-white'} disabled={isLoading}>
          {isLoading ? 'Adding...' : 'Add'}
        </Button>
      </form>
    </>
  );
};

export default AddTodo;
