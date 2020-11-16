import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Card from 'react-bootstrap/Card'
import axios from 'axios';
import {Redirect} from 'react-router-dom'
import './events.css'


class Events extends Component {
	state = {
		date: new Date(),
		selectedDay: String,
		email: String,
	  }


	componentDidMount() {
		axios.post('http://127.0.0.1:8103/api/db_get_user_email', {'username': localStorage.getItem('username')})
			.then(res => {
				this.state.email = res.data;
				window.localStorage.setItem('email', this.state.email);
			});
	}
	render() {
        return (
	<Card className="eventsCardStyle overflow-auto">
	<Card.Body>
		<Card.Title className="classCardTitleStyle">Suggested Events</Card.Title>
        <div className="ml-auto">
  		<button className="btn btn-see-all pull-right">See All</button>
		</div>
        <div className="eventSubTitle">Upcoming Network Events</div>
  		<button className="btn btn-event ">Event Placeholder</button>
  		<button className="btn btn-event ">Event Placeholder</button>
		<button className="btn btn-event ">Event Placeholder</button>
		<button className="btn btn-event ">Event Placeholder</button>

        <div className="workshopSubTitle">Upcoming Workshops</div>
  		<button className="btn btn-event ">Workshop Placeholder</button>
  		<button className="btn btn-event ">Workshop Placeholder</button>
        <button className="btn btn-event ">Workshop Placeholder</button>
		<button className="btn btn-event ">Workshop Placeholder</button>
          
	</Card.Body>
    </Card>



        );
    }
}
export default Events;