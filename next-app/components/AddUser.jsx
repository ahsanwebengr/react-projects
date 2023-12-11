'use client';
import { addUser } from '@/redux/slice';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const AddUser = () => {
    const [name, setName] = useState('');
    const [text, setText] = useState('Add User');
    const dispatch = useDispatch();

    const handleAddUser = () => {
        if (name !== '') {
            dispatch(addUser(name));
            setText('Added');
            setName('');
            setTimeout(() => {
                setText('Add User');
            }, 500);
        } else {
            alert('Please enter something...');
        }

    };

    return (
        <>
            <h3 className='text-2xl font-semibold mb-3'>Add new User </h3>
            <div className="bg-white shadow-md p-3 w-full md:w-1/2 flex gap-2">
                <input
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    placeholder='Add new User'
                    className='pl-2 p-1 focus:outline-transparent flex-1'
                />
                <button onClick={handleAddUser} className='btn btn-primary text-white'>
                    {text}
                </button>
            </div>
        </>
    );
};

export default AddUser;
