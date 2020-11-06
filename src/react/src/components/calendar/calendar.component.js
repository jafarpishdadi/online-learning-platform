import React, { Component } from 'react'
import './calendar.css'
import Calendar, { MonthView } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import axios from 'axios'
import { Redirect } from 'react-router-dom';

class CalendarComponent extends Component {

	state = {
		date: new Date(),
		selectedDay: String,
		email: String,
	  }

	onChange = date => this.setState({ date })

	componentDidMount() {
		axios.post('http://127.0.0.1:8103/api/db_get_user_email', {'username': localStorage.getItem('username')})
			.then(res => {
				this.state.email = res.data;
			})
	}

	clickDay(date) {
		this.state.selectedDay = (date.getFullYear() + ", " + date.getMonth() + ", " + date.getDate()).toString();
		console.log(this.state.selectedDay);
		axios.post('http://127.0.0.1:8103/api/db_get_schedule', {'date': this.state.selectedDay, 'email': this.state.email})
			.then(res => {
				console.log(res);
			})
	}

	render () {

		const { value } = this.state;

		if(!localStorage.getItem('token')) {
			return <Redirect to="/login" />
		}

		return (
			
			<div className="custom-div">
				
				<div className="react-component">
						<Calendar
						onChange={this.onChange}
						value={value}
						locale={'en-US'}
						returnValue={"start"}
						maxDetail={"month"}
						minDetail={"year"}
						calendarType={"US"}
						showDoubleView={false}
						onClickDay={this.clickDay(this.state.date)}
						/>
				</div>
			</div>
		  );
	}
}

export default CalendarComponent