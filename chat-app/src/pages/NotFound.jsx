import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <div class="min-h-screen flex flex-grow items-center justify-center bg-gray-50">
                <div class="rounded-lg bg-white p-8 text-center shadow-xl">
                    <h1 class="mb-4 text-6xl font-bold">404</h1>
                    <p class="text-gray-600">Oops! The page you are looking for could not be found.</p>
                    <Link to={'/'} class="mt-4 btn btn-primary font-semibold text-white "> Go back to Home </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;