import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className='container max-w-6xl mx-auto text-center flex gap-4 items-center justify-center flex-col my-6'>
            <h2 className='text-4xl font-bold'>Page Not Found</h2>
            <Link className='bg-black text-white px-4 py-2 rounded-lg' href={'/'}>Back to Home</Link>
        </div>
    );
};

export default NotFound;