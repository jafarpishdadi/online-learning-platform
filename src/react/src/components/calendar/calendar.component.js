import React, { Component } from 'react'
import './calendar.css'
import Calendar, { MonthView } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import axios from 'axios'
import { Redirect } from 'react-router-dom';

class CalendarComponent extends Component {

	state = {
		date: new Date(),
	  }

	onChange = date => this.setState({ date })

	componentDidMount() {
		console.log(localStorage.getItem('token'));
		console.log(localStorage.getItem('username'));
		console.log(localStorage);
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
						/>
				</div>
			</div>
		  );
	}
}

export default CalendarComponent