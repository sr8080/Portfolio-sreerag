import React, { useEffect, useState, useRef } from 'react';
import io from 'socket.io-client';

const ENDPOINT = "http://localhost:5000";

const User1Chat = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const socketRef = useRef();

    useEffect(() => {
        socketRef.current = io(ENDPOINT);

        // Join a specific chat room
        socketRef.current.emit('joinRoom', { roomId: '123' });

        // Listen for messages
        socketRef.current.on('receiveMessage', (newMessage) => {
            setMessages((prevMessages) => [...prevMessages, newMessage.message]);
        });

        return () => {
            socketRef.current.disconnect();
        };
    }, []);

    const sendMessage = (e) => {
        e.preventDefault();
        if (message.trim()) {
            const messageData = { roomId: '123', message: `User1: ${message}` };
            socketRef.current.emit('sendMessage', messageData);
            setMessages((prevMessages) => [...prevMessages, messageData.message]);
            setMessage('');
        }
    };

    return (
        <div>
            <h2>User 1 Chat</h2>
            <div style={{ border: '1px solid black', padding: '10px', height: '300px', overflowY: 'auto' }}>
                {messages.map((msg, index) => (
                    <p key={index}>{msg}</p>
                ))}
            </div>
            <form onSubmit={sendMessage}>
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type a message..."
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default User1Chat;
