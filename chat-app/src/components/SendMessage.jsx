import React, { useState } from 'react';
import { UserAuth } from '../context/AuthContext';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';
import { toast } from 'react-toastify';

const SendMessage = () => {
    const [message, setMessage] = useState('');
    const { currentUser } = UserAuth();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (message.trim() === "") {
            toast.error("Enter valid message!");
            return;
        }

        try {
            const { uid, displayName, photoURL } = currentUser;
            await addDoc(collection(db, "messages"), {
                text: message,
                name: displayName,
                avatar: photoURL,
                createdAt: serverTimestamp(),
                uid
            });
            setMessage('');
        } catch (error) {
            console.log(error);
        }

    };
    return (
        <div className='bg-gray-100 fixed left-0 bottom-0 w-full py-10 shadow-sm px-2'>
            <form onSubmit={handleSubmit} className='mx-auto container max-w-4xl flex'>
                <input
                    type="text"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    placeholder='Write message'
                    className='input w-full focus:outline-none rounded-r-none text-lg' />
                <button
                    type={!message ? 'button' : 'submit'}
                    className={`${!message ? 'cursor-not-allowed' : 'cursor-pointer'} btn btn-primary text-white w-auto px-6 rounded-l-none rounded-r-lg `}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                    </svg>
                </button>
            </form>
        </div >
    );
};

export default SendMessage;