import React, { useEffect, useRef, useState } from 'react';
import SendMessage from '../components/SendMessage';
import Message from '../components/Message';
import { db } from '../firebase/firebaseConfig';
import { collection, limit, onSnapshot, orderBy, query } from 'firebase/firestore';

const ChatBox = () => {

    const messagesEndRef = useRef();
    const [messages, setMassages] = useState([]);

    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [messages]);

    useEffect(() => {
        const q = query(
            collection(db, "messages"),
            orderBy("createdAt"),
            limit(50),
        );
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const messages = [];
            querySnapshot.forEach((doc) => {
                messages.push({ ...doc.data(), id: doc.id });
            });
            setMassages(messages);
        });

        return () => unsubscribe;
    }, []);

    return (
        <div className="pb-44 pt-20 mx-auto container max-w-4xl">
            {messages.map((message) => (
                <Message key={message.id} message={message} />
            ))}
            <div ref={messagesEndRef}></div>
            <SendMessage/>
        </div>
    );
};

export default ChatBox;