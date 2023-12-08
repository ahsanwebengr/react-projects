'use client';
import { addUser } from '@/redux/slice';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

const AddUser = () => {
    const [name, setName] = useState('');
    const [text, setText] = useState('Add User');
    const dispatch = useDispatch();

    const handleAddUser = () => {
        dispatch(addUser(name));
        setText('Added');
        setName('');

        setTimeout(() => {
            setText('Add User');
        }, 500);
    };

    return (
        <div className='container max-w-6xl mx-auto my-6'>
            <h3 className='text-2xl font-semibold mb-3'>Add new User </h3>
            <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                placeholder='Add new User'
                className='border border-slate-800 pl-2 p-1 border-r-transparent'
            />
            <button onClick={handleAddUser} className='bg-blue-500 text-white px-3 py-1'>
                {text}
            </button>
        </div>
    );
};

export default AddUser;
