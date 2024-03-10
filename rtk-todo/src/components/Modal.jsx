import { useEditTodoMutation, useGetTodosQuery } from '../rtk/services/Api';
import { X } from 'lucide-react';
import { Button, Input, TextArea } from './index';
import { useState } from 'react';
import toast from 'react-hot-toast';

const Modal = ({ modalData, isOpen, setIsOpen }) => {
  const [editTodo, { isLoading }] = useEditTodoMutation();
  const { refetch } = useGetTodosQuery();

  const [editValue, setEditValue] = useState({
    title: modalData?.title,
    description: modalData?.description,
    isComplete: false,
  });

  const id = modalData._id;
  console.log(id);

  const handleEditValue = e => {
    const { name, value } = e.target;
    setEditValue(prevValue => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleEditSubmissionForm = async e => {
    e.preventDefault();
    try {
      const res = await editTodo({ id, data: editValue });
      res.data.message ? toast.success(res.data.message) : null;
      setIsOpen(false);
      refetch();
      return res;
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };
  return (
    <>
      <div className='flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full overly'>
        <div className='relative p-4 w-full max-w-md max-h-full'>
          <div className='relative bg-white rounded-lg shadow'>
            <div className='flex items-center justify-between p-4 md:p-5 border-b rounded-t'>
              <h3 className='text-lg font-semibold text-gray-900'>Update Todo</h3>
              <Button
                bgColor='bg-black'
                color={'text-white'}
                onClick={() => setIsOpen(!isOpen)}
                className={'rounded-full'}
              >
                <X size={16} />
                <span className='sr-only'>Close modal</span>
              </Button>
            </div>
            <form onSubmit={handleEditSubmissionForm} className='p-4 md:p-5'>
              <div className='grid gap-4 mb-4 grid-cols-2'>
                <div className='col-span-2'>
                  <Input
                    placeholder={'Update Title'}
                    value={editValue?.title}
                    onChange={handleEditValue}
                    name={'title'}
                  />
                </div>
                <div className='col-span-2'>
                  <TextArea
                    placeholder={'Update Description'}
                    onChange={handleEditValue}
                    value={editValue?.description}
                    name={'description'}
                  />
                </div>
              </div>
              <Button type={'submit'} color={'text-white'}>
                Update
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
