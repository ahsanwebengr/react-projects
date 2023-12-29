import React from 'react';
import SendMessage from '../components/SendMessage';
import Message from '../components/Message';

const ChatBox = () => {
    const messages = [
        { id: 1, text: 'Hello', name: 'John'},
        { id: 2, text: 'Hi', name: 'Markarm' },
    ];
    return (
        <div className='mx-auto container max-w-4xl p-2 bg-base-200'>
            {messages?.map((message) => {
                return <Message key={message?.id} message={message} />;
            })}
            <SendMessage />
        </div>
    );
};

export default ChatBox;