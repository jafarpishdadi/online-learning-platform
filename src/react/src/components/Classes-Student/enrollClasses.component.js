import React, { Component } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import './enrollClass.css'
import Picture from '../../assets/createPicture.png'



class AllClassList extends Component {
    state = {
        courses: []
    }

    componentDidMount() {
        axios.get(`http://127.0.0.1:8103/api/get_all_courses`)
            .then(res => {
                const courses = res.data;
                this.setState({ courses });
            })
    }

    render() {
        return (
            <div>
                <h1>Course List</h1>
                { this.state.courses.map(courses =>
                    <Card className='courseCards' bg="light" text="black" style={{ height:'10rem', width: '20rem' }}>
                        <Card.Header className='instructorHeader' style={{height:'10rem', color:'white',background:'black' }}>{courses.course_instructor}</Card.Header>
                        <Card.Body>
                            <Card.Title>{courses.course_name}</Card.Title>
                            <Card.Text>
                            <button className="btnRegister">Register</button>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                )}
            </div>
        )
    }
}
export default AllClassList