import React, { Component } from 'react'
import './profile.css'

class Profile extends Component {
	render() {
		return(
			<nav className="navbar navbar-expand-md sticky-top custom m-2 d-flex align-content-between">
				<div>
					<ul className="navbar-nav p-0">
						<li className="nav-item ml-5">
							<a className="nav-item nav-link custom-link" href="">About</a>
						</li>
						<li className="nav-item ml-5">
							<a className="nav-item nav-link custom-link" href="">Solutions</a>
						</li>
						<li className="nav-item ml-5">
							<a className="nav-item nav-link custom-link" href="">Pricing</a>
						</li>
					</ul>
				</div>
				<div className="ml-auto">
					<button className="btn btn-sign m-3">SIGN UP</button>
  					<button className="btn btn-login m-3">LOGIN</button>
				</div>
			</nav>
            //make a flex box set into a row
            //with in the flex box have 2 card components. Use hardcoded data while designing
            //once everything is set-up use props and feed it dummy data from index.js
            //ignore the images for now, empty circle or something would be fine
            //leave skills and completed courses blank and just try to build base components
            //inline tags like, line 9 p-0, means padding 0. ml-5 margin left 5. 
            //search up bootstrap inline display property/blocks. 
		)
	}
}
export default Profile