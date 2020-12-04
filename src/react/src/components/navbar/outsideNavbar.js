import React, { Component } from "react";
import "./outsideNavbar.css";
import Logo from "../../assets/uimpactify-logo.png";
import { Link } from "react-router-dom";

class OutsideNavbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md sticky-top outsideNav m-2 d-flex align-content-between">
        <Link to="/home" className="nav-item nav-link custom-link">
          <button className="btn-logo"> <img src={Logo} className="custom-logo" /></button>
        </Link>
        <div>
          <ul className="navbar-nav p-0">
            <li className="nav-item ml-5">
              <Link to="/about" className="nav-item nav-link custom-link">
                About
              </Link>
            </li>
            <li className="nav-item ml-5">
              <Link to="/solutions" className="nav-item nav-link custom-link">
                Solutions
              </Link>
            </li>
            <li className="nav-item ml-5">
              <Link to="/faq" className="nav-item nav-link custom-link">
                Pricing
              </Link>
            </li>
          </ul>
        </div>
        <div className="ml-auto">
          <Link to="/create">
            <button className="btn btn-login m-3">SIGN UP</button>
          </Link>
          <Link to="/login">
            <button className="btn btn-login m-3">LOGIN</button>
          </Link>
        </div>
      </nav>
    );
  }
}

export default OutsideNavbar;
