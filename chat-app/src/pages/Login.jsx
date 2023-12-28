import React from 'react';

const Login = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center mx-auto container max-w-4xl px-2">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Hello there 👋</h1>
                    <p className="py-6 text-lg">Join the conversation, meet new people, and make connection in one shared chat room.</p>
                    <button className="btn btn-primary text-white uppercase">Login with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;