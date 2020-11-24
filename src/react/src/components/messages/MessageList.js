import React, { Component } from 'react'
import axios from 'axios';

class MessageList extends React.Component {
    render() {
        return (
            <ul className='message-list'>
                {this.props.messages.map((message, index) => {
                    return (
                        <li key={message.time} className='message'>
                            <div>{message.username}</div>
                            <div>{message.message}</div>
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default MessageList