import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios';
import Card from 'react-bootstrap/Card'
import { Redirect } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import './createEvent.css'


class CreateEvent extends Component {

	constructor(props) {

		super(props);

		this.state = {
			dashevent_category: '',
			dashevent_name: '',
			dashevent_instructor: '',
			extra_info: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.onclick = this.onClick = this.onclick.bind(this);
		this.submit = this.submit.bind(this);

	}
	onclick(event) {
		let name = event.target.name;
		let value = event.target.value;
		console.log(name, value)
		let data = {};
		data[name] = value;

		this.setState(data)
	}

	handleChange(event) {
		let name = event.target.name;
		let value = event.target.value;
		console.log(name, value)
		let data = {};
		data[name] = value;

		this.setState(data);


	}

	render() {
		if (this.state.classCreated) {
			return <Redirect to='/dashboard' />
		}
		return (
<div>
			<div>
					<form class="flex-column" onSubmit={this.submit}>
						<div class="form-group pt-0 pl-2 pr-2">
							<label for="inputcourse_category" class="category-text">Event Category</label>
							<input type="text" class="form-control" name='dashevent_category' value={this.state.dashevent_category} placeholder="Enter the event category" onChange={this.handleChange} aria-describedby="course_categoryHelp" />
						</div>
						<div class="form-group pt-0 pl-2 pr-2">
							<label for="inputcourse_name" class="category-text">Event Name</label>
							<input type="text" class="form-control" name='dashevent_name' value={this.state.dashevent_name} placeholder="Enter the event name" onChange={this.handleChange} aria-describedby="course_nameHelp" />
						</div>
						<div class="form-group pt-0 pl-2 pr-2">
							<label for="inputcourse_instructor" class="category-text">Event Host</label>
							<input type="course_instructor" class="form-control" name='dashevent_instructor' value={this.state.dashevent_instructor} onChange={this.handleChange} placeholder="Enter the name of the event host" aria-describedby="course_instructorHelp" />
						</div>
						<div class="form-group pt-0 pl-2 pr-2">
							<label for="inputcourse_info" class="category-text">Event Description</label>
							<input type="course_info" class="form-control" name='extra_info' value={this.state.extra_info} onChange={this.handleChange} placeholder="Enter the event description" aria-describedby="course_infoHelp" />
						</div>

						<div class="mx-auto text-right p-0 col-md-12 mb-4 text-sm">
							<button className="btnCreate">Submit</button>
						</div>
					</form>
					</div>
					</div>
		);
	}

	submit(e) {
		e.preventDefault();

		axios.post('http://127.0.0.1:8103/api/db_add_dashevent', { dashevent_category: this.state.dashevent_category, dashevent_name: this.state.dashevent_name, dashevent_instructor: this.state.dashevent_instructor, extra_info: this.state.extra_info })
			.then(response => {
				console.log(response.data)
				this.setState({ classCreated: true });
			})
			.catch((error) => {
				console.log(error)
			})
			;
	}
}

export default CreateEvent;