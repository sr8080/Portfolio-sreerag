import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const ENDPOINT = "http://localhost:5000";
let socket;

const User2Chat = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        socket = io(ENDPOINT);

        // Join a specific chat room
        socket.emit('joinRoom', { roomId: '123' });

        // Listen for messages
        socket.on('receiveMessage', (newMessage) => {
            setMessages((prevMessages) => [...prevMessages, newMessage.message]); // Use newMessage.message
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    const sendMessage = (e) => {
        e.preventDefault();
        if (message.trim()) {
            const messageData = { roomId: '123', message: `User2: ${message}` };
            socket.emit('sendMessage', messageData);
            setMessages((prevMessages) => [...prevMessages, messageData.message]); // Use messageData.message
            setMessage('');
        }
    };

    return (
        <div>
            <h2>User 2 Chat</h2>
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

export default User2Chat;
