import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class User extends React.Component {
    constructor() {
        super()
        this.state = {
            targetUser: '',
            submitted: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            targetUser: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        localStorage.setItem('targetUser', this.state.targetUser);
        console.log(localStorage.getItem('targetUser'))
        this.setState({
            targetUser: '',
            submitted: true
        })
    }

    render() {
        if (this.state.submitted) {
            return <Redirect to='message'/>
        }
        return (
            <form
                onSubmit={this.handleSubmit}
                className='targetUser'>
                <input
                    onChange={this.handleChange}
                    value={this.state.targetUser}
                    placeholder='Recipient&#39;s username'
                    type='text'/>
                <button onClick={this.handleSubmit}>Enter</button>
            </form>
        )
    }


}

export default User