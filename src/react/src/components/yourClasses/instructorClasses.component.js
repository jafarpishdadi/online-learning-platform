import React, { Component } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import './yourClasses.css'
import gradhat from '../../assets/gradhat.png'
import youtube from '../../assets/youtube.png'
import pen from '../../assets/pen.png'
import { Redirect } from 'react-router-dom'

class InstructorClasses extends Component {
    state = {
        courses: []
    }

    componentDidMount() {
        axios.post(`http://127.0.0.1:8103/api/db_get_courses_of_student`, { 'student': localStorage.getItem('username') })
            .then(res => {
                const courses = res.data;
                this.setState({ courses });
                console.log(localStorage.getItem('username'))
            })
    }

    classRedirect = () => {
        this.setState({
            redirect: true,
            component: 'class'
        })
    }
    createClassRedirect = () => {
        this.setState({
            redirect: true,
            component: 'createClass'
        })
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            if (this.state.component == "class") {
                return <Redirect to='/allclassList' />
            }
            if (this.state.component == "createClass") {
                return <Redirect to='/classcreation' />
            }
        }
    }

    render() {
        return (
            <div>
                <Card.Title className="classCardTitleStyle">Your Courses</Card.Title>
                <div>
                    {this.state.courses.map(courses =>
                        <Card className='courseCards' bg="light" text="black" style={{ height: '14rem', width: '14rem' }}>
                            {this.renderRedirect()}
                            <Card.Header className='instructorClassHeader' style={{ height: '10rem', color: 'white', background: 'black' }}></Card.Header>
                            <Card.Body>
                                <Card.Title>{courses}</Card.Title>
                                <Card.Text>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    )}
                <Card className='courseCards' onClick={this.classRedirect} bg="light" text="black" style={{ height: '14rem', width: '14rem' }}>
                            {this.renderRedirect()}
                            <Card.Header className='addClassHeader' style={{ height: '10rem', color: 'white', background: 'black' }}></Card.Header>
                            <Card.Body>
                                <Card.Title>Join new Course</Card.Title>
                                <Card.Text>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className='createCourseCards' onClick={this.createClassRedirect} bg="light" text="black" style={{ height: '14rem', width: '14rem' }}>
                            {this.renderRedirect()}
                            <Card.Header className='createClassHeader' style={{ height: '10rem', color: 'white', background: 'black' }}></Card.Header>
                            <Card.Body>
                                <Card.Title>Add new Course</Card.Title>
                                <Card.Text>
                                </Card.Text>
                            </Card.Body>
                        </Card>
            </div>
                        </div>
        )
    }
}
export default InstructorClasses