import React, { Component } from 'react'
import axios from 'axios'
import './createClass.css'


class ClassList extends Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`http://127.0.0.1:8103/api/get_all_courses`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <ul>
                <h1>All Courses</h1>
        { this.state.persons.map(person => 
        <li >Course Name: {person.course_name}  
        <li >Course Category: {person.course_category}
        <li>Course Instructor: {person.course_instructor}
        </li>
        </li>
        </li>)}
      </ul>
    )
  }
}

export default ClassList