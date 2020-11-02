import React, { Component } from 'react'
import axios from 'axios'
import './classlist.css'


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
          <h2 >Course Name: {person.course_name}
          <body>
          <span>Course Category: {person.course_category} </span>
          <span>Course Instructor:{person.course_instructor}</span>
          </body>
          </h2>)}
          
      </ul>
    )
  }
}

export default ClassList