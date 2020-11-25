import React, { Component } from 'react'
import './MessageList.css'

class MessageList extends Component {
    render() {
        return (
            <div className= 'message-box'>
            <ul className='message-list'>
                {this.props.messages.map((message, index) => {
                    return (
                        <li key={message.time} className='message'>
                            <div>{message.time} {message.username1}: {message.message}</div>
                        </li>
                    )
                })}
            </ul>
            </div>
        )
    }
}

export default MessageList