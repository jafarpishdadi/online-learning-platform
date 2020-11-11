import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Card from 'react-bootstrap/Card'
import axios from 'axios';
import {Redirect} from 'react-router-dom'
import './studentClasses.css'


class Studentclasses extends Component {
	state = {
		redirect: false,
		component:''
	  }
	  listRedirect = () => {
		this.setState({
		  redirect: true,
		  component:'seeAll'
		})
	  }

	  classRedirect = () => {
		this.setState({
		  redirect: true,
		  component:'class'
		})
	  }
	  renderRedirect = () => {
		if (this.state.redirect)  {
			if (this.state.component == "class"){
				return <Redirect to='/enrollclass' />
			}
			else if(this.state.component == "seeAll"){
				return <Redirect to='/classlist' />
			}
	  }
	}

	render() {
        return (
	<Card className="ClassCardStyle overflow-auto">
	<Card.Body>
		<Card.Title className="classCardTitleStyle">Classes</Card.Title>
        <div className="ml-auto">
		{this.renderRedirect()}
  		<button className="btn btn-see-all pull-right"onClick={this.listRedirect}>See All</button>
		</div>
  		<button className="btn btn-event " >Active Courses</button>
		<button className="btn btn-event "onClick={this.classRedirect}>Enroll Courses</button>
	</Card.Body>
    <div class = 'square'></div>
    </Card>



        );
    }
}
export default Studentclasses;