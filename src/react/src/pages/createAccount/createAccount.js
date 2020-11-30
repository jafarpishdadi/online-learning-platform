import React, { Component } from 'react'
import CreateAccount from '../../components/createAccount/createAccount.component'
import './createAccount.css'
import OutsideNavbar from '../../components/navbar/outsideNavbar.js'
import Picture from '../../assets/createPicture.png'

class CreateAccountPage extends Component {
	render() {
		return(
			<React.Fragment>
				<OutsideNavbar/>
				<div className="d-flex page">
					<div className="picture-create">
						<img src={Picture} alt="Map"></img>
					</div>
					<div className="create-account">
						<CreateAccount/>
					</div>
				</div>
			</React.Fragment>
		)
	}
}
export default CreateAccountPage
