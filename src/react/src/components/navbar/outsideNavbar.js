import React, { Component } from 'react'
import './outsideNavbar.css' 
import Logo from '../../assets/uimpactify-logo.png'

class OutsideNavbar extends Component {
	render () {
		return (
			<nav className="navbar navbar-expand-md sticky-top outsideNav m-2 d-flex align-content-between">
				<img src={Logo} className="custom-logo"/>
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
		)
	}
}

export default OutsideNavbar