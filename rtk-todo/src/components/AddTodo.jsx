import { Input, Button } from './index';

const AddTodo = () => {
  return (
    <>
      <form className='flex space-x-1 bg-white p-4 rounded-lg mb-3'>
        <Input placeholder={'Add Todo'} className={'bg-transparent'} />
        <Button type={'submit'} color={'text-white'}>
          Add
        </Button>
      </form>
    </>
  );
};

export default AddTodo;
