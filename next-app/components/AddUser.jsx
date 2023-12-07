import React from 'react';

const AddUser = () => {
    return (
        <div className='container max-w-6xl mx-auto my-6'>
            <h3 className='text-2xl font-semibold mb-3'>User List</h3>
            <input type="text" placeholder='Add new User' className='border border-slate-800 pl-2 p-1 border-r-transparent' />
            <button className='bg-blue-500 text-white px-3 py-1'>Add User</button>
        </div>
    );
};

export default AddUser;