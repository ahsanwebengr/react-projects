import React from 'react';
import SendMessage from '../components/SendMessage';

const ChatBox = () => {
    return (
        <div className='mx-auto container max-w-4xl p-2'>
            <h1>ChatBox</h1>
            <SendMessage />
        </div>
    );
};

export default ChatBox;