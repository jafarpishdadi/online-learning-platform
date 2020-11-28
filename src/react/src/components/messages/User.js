import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import createMessage from '../../assets/createMessage.png'
import './User.css'

class User extends Component {
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
            <div>
                <b className='prompt'>Please enter the username of who you want to message</b>
                <form
                    onSubmit={this.handleSubmit}
                    className='targetUser form-inline'>
                    <input className='form-control form-lg w-25'
                        onChange={this.handleChange}
                        value={this.state.targetUser}
                        placeholder='Recipient&#39;s username'
                        type='text'/>
                    <button className='writeButton' onClick={this.handleSubmit}>
                         <img
                             src={createMessage}
                             alt={createMessage}/>
                         </button>
                </form>
            </div>
        )
    }


}

export default User