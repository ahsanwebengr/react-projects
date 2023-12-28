import React from 'react';

export const Navbar = () => {
    return (
        <nav className="navbar bg-base-100">
            <div className='mx-auto container max-w-4xl px-2'>
                <div className="flex justify-between items-center w-full">
                    <h2 className="text-2xl font-bold">Chat App</h2>
                    <button className='btn'>Logout</button>
                </div>
            </div>
        </nav>
    );
};
