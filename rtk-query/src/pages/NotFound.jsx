import { Home } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="min-h-screen flex justify-center items-center text-center flex-col gap-4">
            <h1 className='text-5xl font-bold tracking-widest dark:text-white mb-2'>404</h1>
            <h1 className='text-4xl font-semibold dark:text-white'>Page Not Found...!</h1>
            <Link to={'/'} className='btn btn-circle btn-primary'><Home /></Link>
        </div>
    );
};

export default NotFound;