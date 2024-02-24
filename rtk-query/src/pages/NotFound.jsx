import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="min-h-screen flex justify-center items-center text-center flex-col gap-4">
            <h1 className='text-4xl font-semibold dark:text-white'>Page Not Found...!</h1>
            <Link to={'/'} className='btn btn-primary'>Back to Home</Link>
        </div>
    );
};

export default NotFound;