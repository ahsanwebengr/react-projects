import React from 'react';
import { UserAuth } from '../context/AuthContext';

const Message = ({ message }) => {
    const { currentUser } = UserAuth();

    function timeAgo(timestampInSeconds) {
        const currentTimestamp = Math.floor(Date.now() / 1000);
        const secondsAgo = currentTimestamp - timestampInSeconds;

        const minutes = Math.floor(secondsAgo / 60);
        const hours = Math.floor(minutes / 60);

        if (hours >= 1) {
            return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
        } else if (minutes > 1) {
            return `${minutes} minutes ago`;
        } else {
            return 'Less than a minute ago';
        }
    }

    const timestampInSeconds = message?.createdAt?.seconds;
    const formattedTime = timeAgo(timestampInSeconds);

    return (
        <>
            <div className={`chat ${message.uid === currentUser.uid ? 'chat-start' : 'chat-end'}`}>
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img alt="user-avatar" src={message?.avatar} />
                    </div>
                </div>
                <div className="chat-header font-normal mb-1">
                    {message?.name}
                </div>
                <div className="chat-bubble chat-bubble-primary text-white">{message?.text}</div>
                <div className="chat-footer opacity-50">
                    {formattedTime}
                </div>
            </div>

        </>
    );
};

export default Message;