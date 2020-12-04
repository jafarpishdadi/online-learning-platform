import React, { Component } from 'react'
import './createThread.css'
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class CreateThread extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
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
        axios.post('http://127.0.0.1:8103/api/db_create_thread', 
            {'username': localStorage.getItem('username'), 'title': this.state.title,'body': this.state.body})
        .then(response => {
            console.log(response.data);
        })
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
            <div className = 'thread'>
                <div className = 'thread_content'>
                    <form onSubmit = {this.onSubmitHandler}>
                        <h3>Post Thread</h3>
                        <label>
                            Title:
                            <input type="text" className="title" name='title' value={this.state.title} onChange={this.onChangeHandler}/>
                        </label>
                        <br />
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
export default CreateThread
