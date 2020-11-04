import React, { Component } from 'react'
import axios from 'axios'
import './classlist.css'


class ClassList extends Component {
  state = {
    persons: [],
  }

  componentDidMount() {
    axios.post(`http://127.0.0.1:8103/api/db_get_courses_of_student`,{'student': localStorage.getItem('username')} )
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
        console.log(localStorage.getItem('username'))
      })
  }
  

  render() {
    return (
      <ul>
        <h1>All Courses</h1>
        
        { this.state.persons.map(person =>
          <h2 >Course Name: {person}
          </h2>)}
          
      </ul>
    )
  }
}

export default ClassList