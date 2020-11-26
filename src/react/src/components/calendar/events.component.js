import React, { Component } from 'react'

let vals;

class Events extends Component {

	buildEvents() {
		vals = JSON.parse(window.localStorage.getItem('events'));
		if (vals) {
			return (
				vals.map((book) =>
					<p>lol</p>
				)
			)
		} else {
			return (
				<p>No events scheduled</p>
			)
		}

	}

	render() {
		return (
			<React.Fragment>
				{this.buildEvents()}
			</React.Fragment>
		)
	}
}

export default Events
