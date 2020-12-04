import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Card from 'react-bootstrap/Card'
import axios from 'axios';
import {Redirect} from 'react-router-dom'
import './events.css'


class Events extends Component {
    state = {
        courses: []
    }

    componentDidMount() {
        axios.post(`http://127.0.0.1:8103/api/db_get_dashevents_of_student`, { 'student': localStorage.getItem('username') })
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
    eventRedirect = () => {
        this.setState({
            redirect: true,
            component: 'event'
        })
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            if (this.state.component == "class") {
                return <Redirect to='/alleventList' />
            }
            if (this.state.component == "event") {
                return <Redirect to='/eventcreation' />
            }
        }
    }

    render() {
        return (
            <div>
                <Card.Title className="classCardTitleStyle">Your Events</Card.Title>
                <div>
                    {this.state.courses.map(courses =>
                        <Card className='EventCards' bg="light" text="black" style={{ height: '14rem', width: '14rem' }}>
                            {this.renderRedirect()}
                            <Card.Header className='EventClassHeader' style={{ height: '10rem', color: 'white', background: 'black' }}></Card.Header>
                            <Card.Body>
                                <Card.Title>{courses}</Card.Title>
                                <Card.Text>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    )}
                <Card className='courseCards' onClick={this.classRedirect} bg="light" text="black" style={{ height: '14rem', width: '14rem' }}>
                            {this.renderRedirect()}
                            <Card.Header className='addEventHeader' style={{ height: '10rem', color: 'white', background: 'black' }}></Card.Header>
                            <Card.Body>
                                <Card.Title>Join new Event</Card.Title>
                                <Card.Text>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className='courseCards' onClick={this.eventRedirect} bg="light" text="black" style={{ height: '14rem', width: '14rem' }}>
                            {this.renderRedirect()}
                            <Card.Header className='createEventHeader' style={{ height: '10rem', color: 'white', background: 'black' }}></Card.Header>
                            <Card.Body>
                                <Card.Title>Create new Event</Card.Title>
                                <Card.Text>
                                </Card.Text>
                            </Card.Body>
                        </Card>
            </div>
            </div>
        )
    }
}
export default Events;