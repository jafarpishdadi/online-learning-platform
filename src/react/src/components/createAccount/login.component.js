import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Card from 'react-bootstrap/Card'
class Login extends Component {
	
	render() {
		return (
			<Card className="cardStyle">
				<Card.Body>
					<Card.Title className="cardTitleStyle">Welcome Back!</Card.Title>
					<form class="flex-column">
						<div class="form-group pt-0 pl-2 pr-2">
							<label for="inputUsername" class="text-dark font-weight-bold">Username</label>
							<input type="username" class="form-control" id="inputUsername" aria-describedby="usernameHelp"/>
						</div>
						<div class="form-group pt-0 pl-2 pr-2">
							<label for="inputPassword" class="text-dark font-weight-bold">Password</label>
							<input type="password" class="form-control" id="inputPassword" aria-describedby="passwordHelp"/>
						</div>
						<form class="flex-row">
							{/* <div class="mx-auto text-center p-0 col-md-12 mb-4">
							Sign up with
							</div> */}
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
								<a href="" class="ml-1 text-dark font-weight-bold"><u>Sign Up</u></a>
							</div>
							<div class="mx-auto text-center p-0 col-md-12 mb-4 text-sm">
								</div>
							</div>
					</form>
				</Card.Body>
			</Card>
		)
	}
}

export default Login