import React, { Component } from 'react'
import './MessageList.css'
import profilePic from '../../assets/profilePic.png'

class MessageList extends Component {
    render() {
        return (
            <div className= 'message-box'>
            <ul className='message-list'>
                {this.props.messages.map((message, index) => {
                    if (message.username1 === localStorage.getItem('username')){
                        return (
                            <li key={message.time}>
                                <div className='d-flex flex-row justify-content-end'>
                                    <div className='time mr-2 mt-1 text-right'>
                                        {message.time}
                                        </div>
                                    <div className="user1 mt-1 mb-1 mr-3 text-right">{message.username1}</div>
                                </div>
                                <div className='d-flex flex-row justify-content-end'>
                                    <div className='message1 mr-3 text-right'>{message.message}</div>
                                    <img className='profilePic1 mr-3 'src={profilePic}/>
                                </div>
                            </li>
                    )
                    } else {
                        return (
                            <li key={message.time}>
                                <div className="d-flex flex-row justify-content-start">
                                    <div className="user2 mt-1 mb-1 text-left">{message.username1}</div>
                                    <div className="time ml-2 mt-1 text-left">{message.time}</div>
                                </div>
                                <div className="d-flex flex-row justify-content-start">
                                    <img className='profilePic2'src={profilePic}/>
                                    <div className='message2 text-left'> {message.message}</div>
                                </div>
                            </li>
                        )
                    }
                })}
            </ul>
            </div>
        )
    }
}

export default MessageList