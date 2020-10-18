import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Card from 'react-bootstrap/Card'


class CreateAccount extends Component {
	
	render() {
		return (
			<Card className="cardStyle overflow-auto">
				<Card.Body>
					<Card.Title className="cardTitleStyle">Create an Account</Card.Title>
					<form class="flex-column">
						<div class="form-group pt-0 pl-2 pr-2">
							<label for="inputEmail" class="text-dark font-weight-bold">Email</label>
							<input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp"/>
						</div>
						<div class="form-group pt-0 pl-2 pr-2">
							<label for="inputUsername" class="text-dark font-weight-bold">Username</label>
							<input type="username" class="form-control" id="inputUsername" aria-describedby="usernameHelp"/>
						</div>
						<div class="form-group pt-0 pl-2 pr-2">
							<label for="inputPassword" class="text-dark font-weight-bold">Password</label>
							<input type="password" class="form-control" id="inputPassword" aria-describedby="passwordHelp"/>
						</div>
						<form class="flex-row">
							<div class="form-group pt-0 pl-2 pr-2">
								<label class="text-dark font-weight-bold">Are you joining as a Student or Instructor?</label>
								<small class="form-text text-muted">Please select your answer below.</small>
							</div>
							<div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
								<div class="btn-group mr-2 pt-0 pl-2 pr-2" id="userStudent">
									<button type="button" class="btn btn-outline-secondary ">Student</button>
								</div>
								<div class="btn-group mr-2 pt-0 pl-2 pr-2" id="userInstructor">
									<button type="button" class="btn btn-outline-secondary">Instructor</button>
								</div>
								<div class="btn-group mr-2 pt-0 pl-2 pr-2" id="userSocial">
									<button type="button" class="btn btn-outline-secondary">Social Initiatives</button>
								</div>
								<div class="form-group pt-2 pl-2 pr-2">
									<small class="form-text text-muted">*By sharing your email, you agree to our Offer Terms, Terms of Service, and Privacy Policy.</small>
								</div>
							</div>
						</form>
						<div class="mx-auto text-center p-0 col-md-12 mb-4 text-sm">
							Already have an account? 
							<a href="" class="ml-1 text-dark font-weight-bold"><u>Log in</u></a>
						</div>
						<div class="mx-auto text-center p-0 col-md-12 mb-4 text-sm">
							<button className="btnSignUp">SIGN UP</button>
						</div>
	
					</form>
				</Card.Body>
			</Card>
		)
	}
}

export default CreateAccount