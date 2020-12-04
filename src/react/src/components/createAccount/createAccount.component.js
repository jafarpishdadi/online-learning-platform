import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios';
import Card from 'react-bootstrap/Card'
import {Redirect} from 'react-router-dom'


class createAccount extends Component {

    constructor(props) {

        super(props);

        this.state = {
            email: '',
            username:'',
			password: '',
			user_type:''
        };

		this.handleChange = this.handleChange.bind(this);
		this.onclick = this.onClick = this.onclick.bind(this);
        this.submit = this.submit.bind(this);
	}
	
	onclick(event){
		let name = event.target.name;
		let value = event.target.value;
		console.log(name,value)
		let data ={};
		data[name] = value;

		this.setState(data)
	}

    handleChange(event) {
        let name = event.target.name;
        let value = event.target.value;
        console.log(name, value)
        let data = {};
        data[name] = value;

        this.setState(data);


	}
	
    render() {
		if(this.state.accountCreated){
			return <Redirect to='/login' />
		  }
        return (
	<Card className="cardStyle2 overflow-auto">
	<Card.Body>
		<Card.Title className="cardTitleStyle">Create an Account</Card.Title>
		<form class="flex-column" onSubmit = {this.submit}>
			<div class="form-group pt-0 pl-2 pr-2">
				<label for="inputEmail" class="text-dark font-weight-bold">Email</label>
				<input type="text" class="form-control" name='email' value={this.state.email} placeholder="email" onChange={this.handleChange} aria-describedby="emailHelp" />
			</div>
			<div class="form-group pt-0 pl-2 pr-2">
				<label for="inputUsername" class="text-dark font-weight-bold">Username</label>
				<input type="text" class="form-control" name='username' value={this.state.username} placeholder="username" onChange={this.handleChange} aria-describedby="usernameHelp" />
			</div>
			<div class="form-group pt-0 pl-2 pr-2">
				<label for="inputPassword" class="text-dark font-weight-bold">Password</label>
				<input type="password" class="form-control" name='password' value={this.state.password} onChange={this.handleChange} placeholder="password" aria-describedby="passwordHelp"/>
			</div>
			<form class="flex-row" onSubmit = {this.submit}>
				<div class="form-group pt-0 pl-2 pr-2">
					<label class="text-dark font-weight-bold">Are you joining as a Student or Instructor?</label>
					<small class="form-text text-muted">Please select your answer below.</small>
				</div>
				<div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
					<div class="btn-group mr-2 pt-0 pl-2 pr-2" id="userStudent">
						<button type="button" class="btn btn-outline-secondary" name='user_type' value={'student'} onClick={this.onclick} >Student</button>
					</div>
					<div class="btn-group mr-2 pt-0 pl-2 pr-2" id="userInstructor">
					<button type="button" class="btn btn-outline-secondary" name='user_type' value={'instructor'} onClick={this.onclick} >Instructor</button>
					</div>
					<div class="btn-group mr-2 pt-0 pl-2 pr-2" id="userSocial">
					<button type="button" class="btn btn-outline-secondary" name='user_type' value={'initiatives'} onClick={this.onclick} >Initiatives</button>
					</div>
					<div class="form-group pt-2 pl-2 pr-2">
						<small class="form-text text-muted">*By sharing your email, you agree to our Offer Terms, Terms of Service, and Privacy Policy.</small>
					</div>
				</div>
			</form>
			<div class="mx-auto text-center p-0 col-md-12 mb-4 text-sm">
				Already have an account? 
				<a href="/login" class="ml-1 text-dark font-weight-bold"><u>Log in</u></a>
			</div>
			<div class="mx-auto text-center p-0 col-md-12 mb-4 text-sm">
				<button className="btnSignUp">SIGN UP</button>
			</div>

		</form>
	</Card.Body>
</Card>

        );
    }

    submit(e) {
        e.preventDefault();

        axios.post('http://127.0.0.1:8103/api/db_create_user', {user_type:this.state.user_type, email: this.state.email,username:this.state.username, password: this.state.password })
            .then(response => {
				console.log(response.data)
				this.setState({accountCreated:true});
			})
			.catch((error) => {
			console.log(error)
		});
    }
}

export default createAccount;
