import React, { Component } from 'react'
import axios from 'axios';
import MessageList from './MessageList.js'
import SendMessage from './SendMessage.js'
import './Message.css'

class Message extends Component {
    constructor() {
        super()
        this.state = {
            messages: []
        }
    }

    componentDidMount() {
        axios.post('http://127.0.0.1:8103/api/db_get_messages', {'username1': localStorage.getItem('username'), 'username2': localStorage.getItem('targetUser')})
            .then(res => {
                this.setState({
                    messages: res.data
                })
            })
    }

    componentDidUpdate() {
        axios.post('http://127.0.0.1:8103/api/db_get_messages', {'username1': localStorage.getItem('username'), 'username2': localStorage.getItem('targetUser')})
            .then(res => {
                this.setState({
                    messages: res.data
                })
            })
    }

    render() {
        return (
            <div>
                <h1 className='targetUser'>{localStorage.getItem('targetUser')}</h1>
                <MessageList
                    messages={this.state.messages}
                />
                <SendMessage
                    message={this.message}
                />
            </div>
        )
    }

}

export default Message