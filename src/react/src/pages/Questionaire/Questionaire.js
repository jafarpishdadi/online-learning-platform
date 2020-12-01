import React, { Component } from 'react'
import './Questionaire.css'
import OutsideNavbar from '../../components/navbar/outsideNavbar.js'
import Picture from '../../assets/undraw_questions.png'
import Confirm from '../../assets/confirm.png'

import ReactDOM from 'react-dom'
import Card from 'react-bootstrap/Card'
import axios from 'axios';
import {Redirect} from 'react-router-dom'

class Questionaire extends Component {

    constructor(props) {

        super(props);

        this.state = {
			done:false,
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
        if (this.state.done){
            return <Redirect to='/dashboard'/>
        }
        return(
            <React.Fragment>
                <OutsideNavbar/>
                <form class="flex-column" onSubmit = {this.submit}>
                    <div className="d-flex page">
                        <div>
                            <h1 class="text-dark font-weight-bold">Welcome to U-Impactify!</h1><br/>
                            <h2 class="text-dark font-weight-bold">Check all that apply. Do you identify as a:</h2><br/>
                            <div><input type="checkbox"></input>Social entrepreneurs or intrapreneurs</div><br/>
                            <div><input type="checkbox"></input>Worker at a charity or a non-profit organization</div><br/>
                            <div><input type="checkbox"></input>Individual who wants to learn something new</div><br/>
                            <div><input type="checkbox"></input>Other: Please List:<input></input></div><br/>

                            <h2 class="text-dark font-weight-bold">Which category does your company fits in?</h2><br/>
                            <div><input type="checkbox"></input>Art & Culture</div><br/>
                            <div><input type="checkbox"></input>Civic and Environmental</div><br/>
                            <div><input type="checkbox"></input>Education</div><br/>
                            <div><input type="checkbox"></input>Health Services</div><br/>
                            <div><input type="checkbox"></input>International Relations and Development</div><br/>
                            <div><input type="checkbox"></input>Social and Legal Services</div><br/>
                            <div><input type="checkbox"></input>Other:<input></input></div><br/>

                            <h2 class="text-dark font-weight-bold">What do you want to learn more about?   (select all that apply)</h2><br/>
                            <h3>You may change your answers afterward in the Profile page. </h3>
                            <div><input type="checkbox"></input>Accounting</div><br/>
                            <div><input type="checkbox"></input>Business</div><br/>
                            <div><input type="checkbox"></input>Communication</div><br/>
                            <div><input type="checkbox"></input>Design</div><br/>
                            <div><input type="checkbox"></input>Finance</div><br/>
                            <div><input type="checkbox"></input>Project Management</div><br/>
                            <div><input type="checkbox"></input>Other:<input></input></div><br/>
                        </div>
                        <div className="picture">
                            <img src={Picture} alt="Map"></img>
                        </div>
                    </div>
                    <button class="button">
                        <span className="confirm">
                            <img src={Confirm} alt="Map"></img>
                        </span>
                    </button>
                    <button class="button"><span><u>Skip this step</u></span></button>
                </form>
            </React.Fragment>
        )
    }

    submit(e) {
		e.preventDefault();
		this.setState({done:true});
    }
}

export default Questionaire
