import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Card from 'react-bootstrap/Card'
import axios from 'axios';
import {Redirect} from 'react-router-dom'
class Login extends Component {

	constructor(props) {

        super(props);

        this.state = {
            username: '',
			password: '',
			loggedIn:false,
			firstLogIn:false,
        };

		this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);

	}

	componentDidMount() {
		if(window.token){
			this.setState({loggedIn:true});
		}
	}

	handleChange(event){
		let name=event.target.name;
		let value=event.target.value;
		 let data={};
		 data[name]=value;
  
		 this.setState(data);
	 
	  
	}

	render() {
		if(this.state.loggedIn){
			if (this.state.firstLogIn){
				return <Redirect to='/questionaire'/>
			}
			else{
		    	return <Redirect to='/dashboard'/>
			}
		}

		return (
			<Card className="cardStyle2">
				<Card.Body>
					<Card.Title className="cardTitleStyle">Welcome Back!</Card.Title>

					<form class="flex-column" onSubmit = {this.submit}>
					<div class="form-group pt-0 pl-2 pr-2">
				<label for="inputUsername" class="text-dark font-weight-bold">Username</label>
				<input type="text" class="form-control" name='username' value={this.state.username} placeholder="username" onChange={this.handleChange} aria-describedby="usernameHelp" />
			</div>
						<div class="form-group pt-0 pl-2 pr-2">
				<label for="inputPassword" class="text-dark font-weight-bold">Password</label>
				<input type="password" class="form-control" name='password' value={this.state.password} onChange={this.handleChange} placeholder="password" aria-describedby="passwordHelp"/>
			</div>
						<form class="flex-row" onSubmit = {this.submit}>

							<div class="mx-auto text-right p-0 col-md-12 mb-4 text-sm">
								<a href="" class="ml-1 text-dark font-weight-bold"><u>Forgot Password</u></a>
							</div>
							<div class="mx-auto text-center p-0 col-md-12 mb-4 text-sm">
								<button className="btnSignUp">LOGIN</button>
							</div>

						</form>
						<div class="mx-auto text-center p-0 col-md-12 mb-4 text-sm">
							</div>
							<div class="mx-auto text-center p-0 col-md-12 mb-4 text-sm">
							<div class="mx-auto text-center p-0 col-md-12 mb-4 text-sm">
							Don't have an account? 
								<a href="/create" class="ml-1 text-dark font-weight-bold"><u>Sign Up</u></a>
							</div>
							<div class="mx-auto text-center p-0 col-md-12 mb-4 text-sm">
								</div>
							</div>
					</form>
				</Card.Body>
			</Card>
		)
	}

    submit(e) {
		e.preventDefault();
		//Check if this is the first login
		axios.post('http://127.0.0.1:8103/api/db_last_login', {username: this.state.username})
		.then(response => {
			console.log(response);
			this.state.firstLogIn = (response.data == "N/A");
			console.log(this.state.firstLogIn)
			axios.post('http://127.0.0.1:8103/api/db_login', {username: this.state.username, password: this.state.password })
				.then(response => {
					console.log(response);
					localStorage.setItem('token', response.data)
					localStorage.setItem('username', (this.state.username))
					console.log(localStorage.getItem('username'))
					axios.post('http://127.0.0.1:8103/api/db_get_user_type', {username: this.state.username})
					.then(response => {
						console.log(response);
						localStorage.setItem('usertype', response.data)
						this.setState({loggedIn:true});
						console.log(localStorage.getItem('usertype'))
					})
					.catch((error) => {
					console.log(error)
				});
			})
		}).catch((error) => {
			console.log(error)
		});
    }
}

export default Login;