import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Card from 'react-bootstrap/Card'
import axios from 'axios';
import {Redirect} from 'react-router-dom'
import './yourClasses.css'


class Classes extends Component {
	render() {
        return (
	<Card className="classCardStyle overflow-auto">
	<Card.Body>
		<Card.Title className="classCardTitleStyle">Your Courses</Card.Title>
        <div className="ml-auto">
  		<button className="btn btn-see-all pull-right">See All</button>
		</div>

  		<button className="btn btn-activeCourse ">Active Course</button>
  		<button className="btn btn-addCourse ">Add a New Course</button>

	</Card.Body>
    <div class = 'square'></div>
    </Card>



        );
    }
}
export default Classes;