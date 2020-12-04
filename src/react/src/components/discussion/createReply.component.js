import React, { Component } from 'react'
import './createReply.css'
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class CreateReply extends Component {
    constructor(props) {
        super(props)
        this.state = {
            _id: this.props._id,
            body: "",

        }
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }
    onChangeHandler(event){
        let name = event.target.name;
        let value = event.target.value;
        console.log(name, value)
        let data = {};
        data[name] = value;

        this.setState(data);
    }
    onSubmitHandler(e){
        axios.put('http://127.0.0.1:8103/api/db_put_thread_reply', 
            {'username': localStorage.getItem('username'), '_id': this.state._id,'body': this.state.body})
        .catch((error) => {
            console.log(error)
        });
        alert("submit successful");
    }
    render() {
        if (!localStorage.getItem('token')) {
            return <Redirect to='/login' />
        }
        return(
            <div className = 'reply'>
                <div className = 'reply_content'>
                    <form onSubmit = {this.onSubmitHandler}>
                        <h3>Post Reply</h3>
                        <label>
                            Body:
                        </label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" 
                            name='body' value={this.state.body} onChange={this.onChangeHandler}></textarea>
                        <br />
                        <input style = {{margin: '0px'}} type="submit" />
                    </form>
                </div>
            </div>
        )
    }
}
export default CreateReply
