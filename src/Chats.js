import React from 'react'
import Chat from './Chat';
import './Chats.css';

function Chats() {
    return (
        <div className="chats">
            <Chat
                name="Mark"
                message="Yo whats up!"
                timestamp="40 seconds age"
                profilePic="..."
            />
            <Chat
                name="Mark"
                message="Yo whats up!"
                timestamp="40 seconds age"
                profilePic="..."
            />
            <Chat
                name="Mark"
                message="Yo whats up!"
                timestamp="40 seconds age"
                profilePic="..."
            />
            <Chat
                name="Mark"
                message="Yo whats up!"
                timestamp="40 seconds age"
                profilePic="..."
            />
        </div>
    )
}

export default Chats
