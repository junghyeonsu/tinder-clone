import React, { useState } from 'react'
import Avatar from "@material-ui/core/Avatar"
import './ChatScreen.css';

function ChatScreen() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name: 'Elien',
            image: '...',
            message: 'Whats up'
        },
        {
            name: 'Elien',
            image: '...',
            message: 'hows it going!'
        },
        {
            message: 'hows it going!'
        },
    ])

    const handleSend = e => {
        e.preventDefault();
        setMessages([...messages, { message : input }]);
        setInput('');
    }

    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">YOU MATCHED WITH MARK ON 10/08/20</p>
            {messages.map(message => 
                message.name ? (
                <div className="chatScreen__message">
                    <Avatar 
                        className="chatScreen__image" 
                        alt={message.name} 
                        src={message.image} 
                    />
                    <p className="chatScreen__text"> {message.message} </p>
                </div>
                ) : (
                <div className="chatScreen__message">
                    <p className="chatScreen__textUser"> {message.message} </p>
                </div>
                )
            )}

            <div className="chatScreen__input">
                <form>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)} 
                        className="chatScreen__inputField"
                        placeholder="메세지를 입력하세요"
                        type="text"
                        />
                    <button 
                        className="chatScreen__inputButton"
                        onClick={handleSend}    
                    >SEND</button>
                </form>
            </div>
        </div>
    )
}

export default ChatScreen
