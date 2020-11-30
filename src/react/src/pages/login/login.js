import React, { Component } from 'react'
import Login from '../../components/createAccount/login.component'
import './login.css'
import OutsideNavbar from '../../components/navbar/outsideNavbar.js'
import Picture from '../../assets/loginPicture.png'

class LoginPage extends Component {
	render() {
		return(
			<React.Fragment>
				<OutsideNavbar/>
				<div className="d-flex page">
					<div className="picture-login">
						<img src={Picture} alt="Map"></img>
					</div>
					<div className="login-component">
						<Login/>
					</div>
				</div>
			</React.Fragment>
		)
	}
}
export default LoginPage
